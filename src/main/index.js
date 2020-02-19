import React, { useState, useEffect } from 'react';
import { StatusBar, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRIMARY_DARK, BLACK } from '../utils/colors';
import { BAR_STYLE } from '../utils/constants';
import NoTransactions from '../components/noTransactions';
import { Container, Fab } from './styles';
import NewTransaction from '../components/newTransaction';
import CardTransaction from '../components/cardTransaction';
import ConfirmAnimation from '../components/confirmAnimation';
import ExpensesGraph from '../components/expensesGraph';
import Toolbar from '../components/toolbar';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [editable, setEditable] = useState(null);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  function fadeModal() {
    setIsModalVisible(false);
    setEditable(null);
  }

  function showModal() {
    setIsModalVisible(true);
  }

  useEffect(() => {
    if (isVisibleConfirm) {
      setTimeout(() => {
        setIsVisibleConfirm(false);
      }, 2000);
    }
  }, [isVisibleConfirm]);

  function displayDoneAnimation() {
    setIsVisibleConfirm(true);
  }

  function removeSelected(id) {
    const index = transactions.findIndex(item => item.id === id);
    const list = [...transactions];
    const removed = list.splice(index, 1);
    Alert.alert(
      'Atenção!',
      `Deseja realmente remover "${removed[0].description}" de suas transações?`,
      [{ text: 'Não' }, { text: 'SIM', onPress: () => setTransactions(list) }]
    );
  }

  function addTransaction(transaction) {
    setTransactions([
      ...transactions,
      {
        id: transactions.length + 1,
        description: transaction.description,
        value: parseFloat(transaction.value.replace(',', '.'), 10),
        date: transaction.date,
      },
    ]);
    fadeModal();
    displayDoneAnimation();
  }

  function edit(id) {
    const index = transactions.findIndex(item => item.id === id);
    setEditable(transactions[index]);
    showModal();
  }

  function editTransaction(transaction, id) {
    const index = transactions.findIndex(item => item.id === id);
    const newList = [...transactions];
    newList[index] = { id, ...transaction };
    setTransactions([...newList]);
    fadeModal();
    displayDoneAnimation();
  }

  return (
    <Container>
      <StatusBar backgroundColor={PRIMARY_DARK} barStyle={BAR_STYLE} />
      <Toolbar action={showModal} />
      <ExpensesGraph transactions={transactions} />
      {isVisibleConfirm && <ConfirmAnimation />}

      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CardTransaction
              key={item.id}
              id={item.id}
              remove={removeSelected}
              description={item.description}
              value={item.value}
              date={item.date}
              edit={edit}
            />
          )}
        />
      ) : (
        <NoTransactions />
      )}
      <NewTransaction
        visible={isModalVisible}
        fadeModal={fadeModal}
        newTransaction={addTransaction}
        editable={editable}
        editTransaction={editTransaction}
      />
      <Fab style={{ elevation: 4 }} onPress={showModal}>
        <Icon name="plus" color={BLACK} size={32} />
      </Fab>
    </Container>
  );
}

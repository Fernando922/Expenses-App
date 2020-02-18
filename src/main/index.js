import React, { useState } from 'react';
import { StatusBar, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRIMARY_DARK, BLACK } from '../utils/colors';
import { BAR_STYLE } from '../utils/constants';
import NoTransactions from '../components/noTransactions';
import { Container, Fab } from './styles';
import NewTransaction from '../components/newTransaction';
import CardTransaction from '../components/cardTransaction';
import ExpensesGraph from '../components/expensesGraph';
import Toolbar from '../components/toolbar';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Cinema', value: '80', date: new Date() },
    { id: 2, description: 'Padaria', value: '45,50', date: new Date() },
    { id: 3, description: 'Cafeteria', value: '9999,00', date: new Date() },
  ]);
  const [editable, setEditable] = useState(null);

  function fadeModal() {
    setIsModalVisible(false);
    setEditable(null);
  }

  function showModal() {
    setIsModalVisible(true);
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
        value: transaction.value,
        date: transaction.date,
      },
    ]);
    fadeModal();
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
  }

  return (
    <Container>
      <StatusBar backgroundColor={PRIMARY_DARK} barStyle={BAR_STYLE} />
      <Toolbar action={showModal} />
      <ExpensesGraph />

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

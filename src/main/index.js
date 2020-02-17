import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRIMARY_DARK, BLACK } from '../utils/colors';
import { BAR_STYLE } from '../utils/constants';
import NoTransactions from '../components/noTransactions';
import { Container, Fab } from './styles';
import ModalComponent from '../components/modal';
import CardTransaction from '../components/cardTransaction';
import ExpensesGraph from '../components/expensesGraph';
import Toolbar from '../components/toolbar';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [transactions] = useState([
    { id: 1, description: 'Cinema', value: 80, date: new Date() },
    { id: 2, description: 'Padaria', value: 45, date: new Date() },
    { id: 3, description: 'Cafeteria', value: 13.5, date: new Date() },
  ]);

  function fadeModal() {
    setIsModalVisible(false);
  }

  function showModal() {
    setIsModalVisible(true);
  }

  return (
    <Container>
      <StatusBar backgroundColor={PRIMARY_DARK} barStyle={BAR_STYLE} />
      <Toolbar action={showModal} />
      <ExpensesGraph />
      {transactions.length > 0 ? (
        transactions.map(transaction => (
          <CardTransaction
            key={transaction.id}
            description={transaction.description}
            value={transaction.value}
            date={transaction.date}
          />
        ))
      ) : (
        <NoTransactions />
      )}
      <ModalComponent visible={isModalVisible} fadeModal={fadeModal} />
      <Fab style={{ elevation: 4 }} onPress={showModal}>
        <Icon name="plus" color={BLACK} size={32} />
      </Fab>
    </Container>
  );
}

import React from 'react';
import LottieView from 'lottie-react-native';
import { Container, Label } from './styles';

const sleepGif = require('../../assets/animations/sleep.json');

export default function NoTransactions() {
  return (
    <Container>
      <LottieView source={sleepGif} autoPlay loop />
      <Label>Não há transações!</Label>
    </Container>
  );
}

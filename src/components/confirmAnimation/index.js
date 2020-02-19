import React from 'react';
import LottieView from 'lottie-react-native';
import { Container } from './styles';

const done = require('../../assets/animations/done.json');

export default function ConfirmAnimation() {
  return (
    <Container>
      <LottieView source={done} autoPlay />
    </Container>
  );
}

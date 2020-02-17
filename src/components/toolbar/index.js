import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Title, Button } from './styles';
import { WHITE } from '../../utils/colors';

export default function Toolbar({ action }) {
  return (
    <Container>
      <Title>Despesas Pessoais</Title>
      <Button>
        <Icon name="plus" color={WHITE} size={32} onPress={action} />
      </Button>
    </Container>
  );
}

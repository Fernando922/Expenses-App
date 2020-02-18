import React from 'react';
import {
  Container,
  Card,
  ContainerValue,
  LabelValue,
  Description,
  LabelDate,
  DeleteButton,
  DeleteIcon,
  ContainerDescription,
} from './styles';
import formatDate from '../../utils/formatDate';

export default function CardTransaction({
  description,
  value,
  date,
  id,
  remove,
}) {
  return (
    <Container>
      <Card style={{ elevation: 4 }}>
        <ContainerValue>
          <LabelValue size={value.length}>R$ {value}</LabelValue>
        </ContainerValue>
        <ContainerDescription>
          <Description>{description}</Description>
          <LabelDate>{formatDate(date)}</LabelDate>
        </ContainerDescription>
        <DeleteButton onPress={() => remove(id)}>
          <DeleteIcon />
        </DeleteButton>
      </Card>
    </Container>
  );
}

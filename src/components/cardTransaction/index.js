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

export default function CardTransaction({ description, value, date }) {
  return (
    <Container>
      <Card style={{ elevation: 4 }}>
        <ContainerValue>
          <LabelValue>{value}</LabelValue>
        </ContainerValue>
        <ContainerDescription>
          <Description>{description}</Description>
          <LabelDate>{date.toString()}</LabelDate>
        </ContainerDescription>
        <DeleteButton>
          <DeleteIcon />
        </DeleteButton>
      </Card>
    </Container>
  );
}

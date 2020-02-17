import React from 'react';

import { Container, Card, ProgressBar, DayContainer, DayLabel } from './styles';

export default function ExpensesGraph() {
  return (
    <Container>
      <Card style={{ elevation: 4 }}>
        <DayContainer>
          <ProgressBar progress={0.3} />
          <DayLabel>D</DayLabel>
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={0.5} />
          <DayLabel>S</DayLabel>
        </DayContainer>
        <DayContainer>
          <DayLabel>T</DayLabel>
          <ProgressBar progress={0.3} />
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={0.1} />
          <DayLabel>Q</DayLabel>
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={0.2} />
          <DayLabel>Q</DayLabel>
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={0.7} />
          <DayLabel>S</DayLabel>
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={0.9} />
          <DayLabel>S</DayLabel>
        </DayContainer>
      </Card>
    </Container>
  );
}

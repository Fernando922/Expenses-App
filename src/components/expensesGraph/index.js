import React, { useState, useEffect } from 'react';

import { Container, Card, ProgressBar, DayContainer, DayLabel } from './styles';
import findBiggerValue from '../../utils/findBiggerValue';

export default function ExpensesGraph({ transactions }) {
  const [dailyExpenses, setDailyExpenses] = useState([0, 0, 0, 0, 0, 0, 0]);

  function resetDays() {
    setDailyExpenses([0, 0, 0, 0, 0, 0, 0]);
  }

  function setOneExpense(pos) {
    const days = [0, 0, 0, 0, 0, 0, 0];
    days[transactions[pos].date.getDay()] = 1;
    setDailyExpenses(days);
  }

  function divideExpensesPerDay() {
    const biggerValue = findBiggerValue(transactions);
    function updateProgress(days) {
      const listProgress = [0, 0, 0, 0, 0, 0, 0];
      days.map(day => {
        listProgress[day.number] = (day.value * 100) / biggerValue / 100;
        return true;
      });
      setDailyExpenses(listProgress);
    }

    function findDays(list) {
      const days = [];
      list.map(item => {
        const dayValue = { number: item.date.getDay(), value: item.value };
        days.push(dayValue);
        return true;
      });
      updateProgress(days);
    }

    findDays(transactions);
  }

  useEffect(() => {
    resetDays();
    if (transactions.length > 1) {
      return divideExpensesPerDay();
    }
    if (transactions.length === 1) {
      return setOneExpense(0);
    }
    return resetDays();
  }, [transactions]);

  return (
    <Container>
      <Card style={{ elevation: 4 }}>
        <DayContainer>
          <ProgressBar progress={dailyExpenses[0]} />
          <DayLabel>D</DayLabel>
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={dailyExpenses[1]} />
          <DayLabel>S</DayLabel>
        </DayContainer>
        <DayContainer>
          <DayLabel>T</DayLabel>
          <ProgressBar progress={dailyExpenses[2]} />
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={dailyExpenses[3]} />
          <DayLabel>Q</DayLabel>
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={dailyExpenses[4]} />
          <DayLabel>Q</DayLabel>
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={dailyExpenses[5]} />
          <DayLabel>S</DayLabel>
        </DayContainer>
        <DayContainer>
          <ProgressBar progress={dailyExpenses[6]} />
          <DayLabel>S</DayLabel>
        </DayContainer>
      </Card>
    </Container>
  );
}

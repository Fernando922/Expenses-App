import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import formatDate from '../../utils/formatDate';
import {
  Container,
  ModalContent,
  Input,
  LabelDate,
  ContainerLabels,
  SaveButton,
  TextButton,
  NewDateButton,
} from './styles';

export default function NewTransaction({ visible, fadeModal, newTransaction }) {
  const refValue = useRef(null);

  const [transaction, setTransaction] = useState({
    description: '',
    value: '',
    date: new Date(),
  });

  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate;
    setTransaction({ ...transaction, date: currentDate });
  };

  const showDatepicker = () => {
    setShow(true);
  };

  function addNew() {
    if (transaction.description === '' || transaction.value === '') {
      Alert.alert('Atenção!', 'Preencha todos os campos!');
    } else {
      newTransaction(transaction);
      setTransaction({ description: '', value: '', date: new Date() });
    }
  }

  return (
    <Container>
      <Modal
        isVisible={visible}
        onBackdropPress={fadeModal}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <ModalContent>
          <Input
            placeholder="Titulo"
            maxLength={15}
            value={transaction.description}
            onChangeText={text =>
              setTransaction({ ...transaction, description: text })
            }
            returnKeyType="next"
            onSubmitEditing={() => refValue.current.focus()}
          />
          <Input
            ref={refValue}
            keyboardType="numeric"
            placeholder="Valor (R$)"
            maxLength={7}
            value={transaction.value}
            onChangeText={text =>
              setTransaction({ ...transaction, value: text })
            }
          />
          <ContainerLabels>
            <LabelDate>
              Data selecionada: {formatDate(transaction.date)}
            </LabelDate>
            <NewDateButton onPress={() => showDatepicker()}>
              <LabelDate primary>Selecionar Data</LabelDate>
            </NewDateButton>
          </ContainerLabels>
          <SaveButton
            style={{ elevation: 3 }}
            onPress={() => addNew(transaction)}
          >
            <TextButton>Nova Transação</TextButton>
          </SaveButton>
          {show && (
            <DateTimePicker
              value={transaction.date}
              mode="date"
              display="default"
              onChange={onChange}
              maximumDate={new Date()}
            />
          )}
        </ModalContent>
      </Modal>
    </Container>
  );
}

import React, { useState } from 'react';
import Modal from 'react-native-modal';
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
  const [transaction, setTransaction] = useState({
    description: '',
    value: '',
  });

  function addNew() {
    newTransaction(transaction);
    setTransaction({});
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
          />
          <Input
            keyboardType="numeric"
            placeholder="Valor (R$)"
            maxLength={7}
            value={transaction.value}
            onChangeText={text =>
              setTransaction({ ...transaction, value: text })
            }
          />
          <ContainerLabels>
            <LabelDate>Data selecionada: 30/01/2020</LabelDate>
            <NewDateButton>
              <LabelDate primary>Selecionar Data</LabelDate>
            </NewDateButton>
          </ContainerLabels>
          <SaveButton
            style={{ elevation: 3 }}
            onPress={() => addNew(transaction)}
          >
            <TextButton>Nova Transação</TextButton>
          </SaveButton>
        </ModalContent>
      </Modal>
    </Container>
  );
}

import React from 'react';
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

export default function ModalComponent({ visible, fadeModal }) {
  return (
    <Container>
      <Modal
        isVisible={visible}
        onBackdropPress={fadeModal}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <ModalContent>
          <Input placeholder="Titulo" maxLength={50} />
          <Input
            keyboardType="numeric"
            placeholder="Valor (R$)"
            maxLength={10}
          />
          <ContainerLabels>
            <LabelDate>Data selecionada: 30/01/2020</LabelDate>
            <NewDateButton>
              <LabelDate primary>Selecionar Data</LabelDate>
            </NewDateButton>
          </ContainerLabels>
          <SaveButton style={{ elevation: 3 }}>
            <TextButton>Nova Transação</TextButton>
          </SaveButton>
        </ModalContent>
      </Modal>
    </Container>
  );
}

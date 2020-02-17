import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { DARKGREY, PRIMARY_COLOR, WHITE, GREY } from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
`;

export const ModalContent = styled.View`
  height: 250px;
  background-color: ${WHITE};
  padding: 10px;
`;

export const Input = styled(TextInput)`
  border-bottom-color: ${GREY};
  border-bottom-width: 1px;
`;

export const ContainerLabels = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const LabelDate = styled.Text`
  color: ${props => (props.primary ? PRIMARY_COLOR : DARKGREY)};
  font-weight: bold;
  font-size: 13px;
`;

export const NewDateButton = styled.TouchableOpacity``;

export const SaveButton = styled.TouchableOpacity`
  background-color: ${PRIMARY_COLOR};
  padding: 10px;
  margin-top: 20px;
  align-self: flex-end;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  color: ${WHITE};
`;

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { RED, WHITE, PRIMARY_DARK, BLACK } from '../../utils/colors';

export const Container = styled.View`
  padding: 5px;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  background-color: ${WHITE};
  padding: 10px 10px 10px 10px;
`;

export const ContainerValue = styled(LinearGradient).attrs({
  colors: ['#7B2C87', '#9645AE'],
})`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${PRIMARY_DARK};
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-right: 10px;
`;

export const LabelValue = styled.Text`
  color: ${WHITE};
`;

export const ContainerDescription = styled.View``;

export const Description = styled.Text`
  color: ${BLACK};
  font-weight: bold;
  font-size: 18px;
`;

export const LabelDate = styled.Text``;

export const DeleteButton = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
`;

export const DeleteIcon = styled(Icon).attrs({
  name: 'delete',
  color: RED,
  size: 24,
})``;

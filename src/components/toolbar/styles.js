import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { PRIMARY_COLOR, WHITE } from '../../utils/colors';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7B2C87', '#9645AE'],
})`
  width: 100%;
  height: 60px;
  background-color: ${PRIMARY_COLOR};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;
export const Title = styled.Text`
  font-size: 18px;
  color: ${WHITE};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

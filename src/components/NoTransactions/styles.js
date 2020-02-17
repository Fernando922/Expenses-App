import styled from 'styled-components/native';
import { WHITE, BLACK } from '../../utils/colors';

export const Container = styled.View`
  width: 200px;
  height: 200px;
  background-color: ${WHITE};
  align-self: center;
  margin-top: 40px;
`;

export const Card = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  color: ${BLACK};
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

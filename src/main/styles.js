import styled from 'styled-components/native';
import { WHITE, SECONDARY_COLOR } from '../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${WHITE};
`;

export const Fab = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${SECONDARY_COLOR};
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 16px;
`;

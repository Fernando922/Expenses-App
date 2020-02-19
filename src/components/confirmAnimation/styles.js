import styled from 'styled-components/native';
import { WHITE, ORANGE } from '../../utils/colors';

export const Container = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${WHITE};
  align-self: center;
  margin-top: 100px;
  position: absolute;
  z-index: 99;
  border: 4px solid ${ORANGE};
`;

export const Card = styled.View`
  flex: 1;
`;

import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';
import { WHITE, PRIMARY_COLOR } from '../../utils/colors';

export const Container = styled.View`
  height: 180px;
  background-color: ${WHITE};
  padding: 20px;
`;

export const Card = styled.View`
  flex: 1;
  background-color: ${WHITE};
  border-radius: 4px;
  flex-direction: row;
`;

export const DayContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DayLabel = styled.Text`
  position: absolute;
  bottom: 5px;
`;

export const ProgressBar = styled(Progress.Bar).attrs({
  width: 70,
  height: 10,
  color: PRIMARY_COLOR,
})`
  transform: rotate(-90deg);
`;

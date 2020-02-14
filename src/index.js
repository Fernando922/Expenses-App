import React from 'react';
import { View, StatusBar } from 'react-native';
import { PRIMARY_COLOR, WHITE } from './utils/colors';
import { BAR_STYLE } from './utils/constants';
import NoTransactions from './components/NoTransactions';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: WHITE,
      }}
    >
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle={BAR_STYLE} />
      <NoTransactions />
    </View>
  );
}

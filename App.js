import React from 'react';
import { StatusBar } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#8B10AE'
      />
      <AppNavigator />
    </React.Fragment>
  )
}
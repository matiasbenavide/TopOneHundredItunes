import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import TopOneHundredNavigator from './navigation';

export default function App() {
  return (
    <Provider store={store} style={styles.view}>
      <TopOneHundredNavigator />
    </Provider>
  );
}
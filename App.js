import React from 'react';
import { Provider } from 'react-redux';

import { View, StatusBar } from 'react-native';
import BaseNavigator from './src/config/navigator';
import Header from './src/components/header/header';

import store from './src/store';

const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="#000" barStyle="light-content" />
    <Provider store={store}>
      <Header />
      <BaseNavigator />
    </Provider>
  </View>
);

export default App;

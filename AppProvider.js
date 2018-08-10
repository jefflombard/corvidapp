import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import { initStoreForCorvid } from './utilities';
import App from './App.js';

const store = initStoreForCorvid();

export default class AppProvider extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';

import Login from './scenes/Login';
import { initStoreForCorvid } from './utilities';

import { Provider } from 'react-redux';

const store = initStoreForCorvid();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Login />
        </View>
      </Provider>
    );
  }
}

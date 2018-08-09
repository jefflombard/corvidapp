import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';

import Login from './scenes/Login';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

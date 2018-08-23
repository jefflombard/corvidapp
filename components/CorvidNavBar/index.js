import { Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    height: 64,
    position: 'absolute',
    width: '100%',
    backgroundColor: "#000",
  },
});

export default class CorvidNavBar extends Component {
  render(){

    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const LogoContainer = props => (
  <View style={styles.container}>
    <Image source={require('../../assets/logo.png')} />
    <Text style={styles.titleText}>Corvid</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 42,
    fontFamily: 'Helvetica',
    marginLeft: 20,
    color: '#fff'
  }
});

export default LogoContainer;
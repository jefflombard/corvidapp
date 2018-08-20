import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 42,
    fontFamily: 'Helvetica',
    marginLeft: 20,
    color: '#fff',
  },
});

const logo = require('../../assets/logo.png');

const LogoContainer = () => (
  <View style={styles.container}>
    <Image source={logo} />
    <Text style={styles.titleText}>
      Corvid
    </Text>
  </View>
);

export default LogoContainer;

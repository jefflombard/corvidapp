import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

import LogoContainer from './LogoContainer';

class LoginScene extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../../assets/bg.png')}
        >
        <LogoContainer />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default LoginScene;
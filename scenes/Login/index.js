import React, { Component } from 'react';
import {
  ImageBackground, StyleSheet, View, Button,
} from 'react-native';
import { connect } from 'react-redux';

import LogoContainer from './LogoContainer';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switcherContainer: {
    flexDirection: 'row',
    marginTop: 55,
    width: 223,
    justifyContent: 'space-between',
  },
});

class LoginScene extends Component {
  onTogglePress() {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'TOGGLE_SIGN_UP',
      },
    );
  }

  render() {
    const { background, switcherContainer } = styles;
    return (
      <ImageBackground
        style={background}
        source={require('../../assets/bg.png')} // eslint-disable-line global-require
      >
        <LogoContainer />
        <View style={switcherContainer}>
          <Button title="Sign In" color="#fff" onPress={this.onTogglePress.bind(this)}/>
          <Button title="Sign Up" color="#fff" onPress={this.onTogglePress.bind(this)}/>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(LoginScene);

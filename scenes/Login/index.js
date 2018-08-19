import React, { Component } from 'react';
import {
  ImageBackground, StyleSheet, View, Button,
} from 'react-native';
import { connect } from 'react-redux';

import LogoContainer from './LogoContainer';
import CorvidTextInput from './CorvidTextInput';

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
  formContainer: {
    width: 300,
    marginTop: 10,
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

  onEmailChange(text) {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'EMAIL_TEXT_CHANGED',
        payload: text,
      },
    );
  }

  onPasswordChange(text) {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'PASSWORD_TEXT_CHANGED',
        payload: text,
      },
    );
  }

  onConfirmPasswordChange(text) {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'CONFIRM_PASSWORD_TEXT_CHANGED',
        payload: text,
      },
    );
  }

  render() {
    const { background, switcherContainer, formContainer } = styles;
    const { auth } = this.props;
    const { isSignUp } = auth;
    let pwInputs;

    if (isSignUp) {
      pwInputs = (
        <View>
          <CorvidTextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
          <CorvidTextInput
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={this.onConfirmPasswordChange.bind(this)}
          />
        </View>
      );
    } else {
      pwInputs = (
        <CorvidTextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={this.onPasswordChange.bind(this)}
        />
      );
    }

    return (
      <ImageBackground
        style={background}
        source={require('../../assets/bg.png')} // eslint-disable-line global-require
      >
        <LogoContainer />
        <View style={switcherContainer}>
          <Button title="Sign In" disabled={!isSignUp} color="#fff" onPress={this.onTogglePress.bind(this)} />
          <Button title="Sign Up" disabled={isSignUp} color="#fff" onPress={this.onTogglePress.bind(this)} />
        </View>
        <View style={formContainer}>
          <CorvidTextInput onChangeText={this.onEmailChange.bind(this)} placeholder="Email" />
          {pwInputs}
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(LoginScene);

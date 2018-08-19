import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LogoContainer from './LogoContainer';

import CorvidTextInput from './CorvidTextInput';
import BrandButton from '../../components/BrandButton';
import * as actionCreators from '../../actionCreators';

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
  signUpText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 25,
    marginBottom: 25,
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

  signIn() {
    // Sign In With FireBase
    const { dispatch } = this.props;
    dispatch({ type: 'SIGNIN' });
  }

  signUp() {
    // Sign Up with FireBase
    const { dispatch } = this.props;
    dispatch({ type: 'SIGNUP' });
  }

  render() {
    const { background, switcherContainer, formContainer } = styles;
    const { auth, actions } = this.props;
    const { isSignUp } = auth;
    const signUpText = isSignUp ? ' sign up ' : ' sign in ';
    const signUpAction = isSignUp ? this.signUp.bind(this) : this.signIn.bind(this);
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
          <Button title="Sign In" disabled={!isSignUp} color="#fff" onPress={actions.toggleSignUp} />
          <Button title="Sign Up" disabled={isSignUp} color="#fff" onPress={actions.toggleSignUp} />
        </View>
        <View style={formContainer}>
          <CorvidTextInput onChangeText={this.onEmailChange.bind(this)} placeholder="Email" />
          {pwInputs}
        </View>
        <BrandButton onPress={signUpAction}>
          { signUpText }
        </BrandButton>
        <Text style={styles.signUpText}>
          or
          { signUpText }
          with
        </Text>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);

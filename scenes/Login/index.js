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
  errorMessage: {
    color: '#FF2A66',
    marginTop: 5,
  },
});

class LoginScene extends Component {
  render() {
    const { background, switcherContainer, formContainer } = styles;
    const { auth, actions, ui } = this.props;
    const { isSignUp } = auth;
    const signUpText = isSignUp ? ' sign up ' : ' sign in ';
    const signUpAction = isSignUp ? actions.signUp : actions.signIn;
    let pwInputs;

    if (isSignUp) {
      pwInputs = (
        <View>
          <CorvidTextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={actions.onPasswordChange}
          />
          <CorvidTextInput
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={actions.onConfirmPasswordChange}
          />
        </View>
      );
    } else {
      pwInputs = (
        <CorvidTextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={actions.onPasswordChange}
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
          <CorvidTextInput onChangeText={actions.onEmailChange} placeholder="Email" />
          {pwInputs}
        </View>
        <Text style={styles.errorMessage}>
          {ui.error}
        </Text>
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

const mapStateToProps = state => ({ auth: state.auth, ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene);

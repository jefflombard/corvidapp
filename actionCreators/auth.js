import firebase from 'react-native-firebase';

export const toggleSignUp = () => (
  {
    type: 'TOGGLE_SIGN_UP',
  }
);

export const onConfirmPasswordChange = text => (
  {
    type: 'CONFIRM_PASSWORD_TEXT_CHANGED',
    payload: text,
  }
);

export const onEmailChange = text => (
  {
    type: 'EMAIL_TEXT_CHANGED',
    payload: text,
  }
);

export const onPasswordChange = text => (
  {
    type: 'PASSWORD_TEXT_CHANGED',
    payload: text,
  }
);

export const signUp = () => (dispatch, getState) => {
  const { email, password, confirmPassword } = getState().auth;
  // Check for password match
  if (!(password === confirmPassword)) {
    return dispatch({
      type: 'ERROR',
      payload: 'Passwords do not match',
    });
  }
  // Check for email
  if (!email) {
    return dispatch({
      type: 'ERROR',
      payload: 'You need to enter an email',
    });
  }
  // Clear errors
  dispatch({
    type: 'ERROR',
    payload: '',
  });
  // Tell UI That we are Loading
  dispatch({
    type: 'LOADING',
    payload: true,
  });

  // firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).then();
};

export const signIn = () => {

};

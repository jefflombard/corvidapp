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

const transformErrorMessage = (message) => {
  switch (message) {
    case 'The email address is badly formatted.':
      return 'Not a valid email address.';
    case 'The given password is invalid.':
      return 'Weak password, must be at least 8 characters long.';
    case 'The email address is already in use by another account.':
      return 'This email address is already in use, if you forgot your password, tap on forgot password.';
    default:
      return message;
  }
};

export const signUp = () => (dispatch, getState) => {
  const { email, password, confirmPassword } = getState().auth;
  // Check for password match
  if (!(password === confirmPassword)) {
    return dispatch({
      type: 'ERROR',
      payload: 'Passwords do not match.',
    });
  }
  // Check for email
  if (!email) {
    return dispatch({
      type: 'ERROR',
      payload: 'You need to enter an email.',
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

  firebase
    .auth()
    .createUserAndRetrieveDataWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch({
        type: 'USER_LOGGED_IN',
        payload: response.user,
      });
    })
    .catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: transformErrorMessage(error.message),
      });
      return dispatch({
        type: 'LOADING',
        payload: false,
      });
    });
};

export const signIn = () => {

};

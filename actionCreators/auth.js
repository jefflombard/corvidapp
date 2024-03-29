import firebase from 'react-native-firebase';
import { AlertIOS } from 'react-native';

export const toggleSignUp = () => (dispatch) => {
  dispatch({
    type: 'ERROR',
    payload: '',
  });

  return dispatch({
    type: 'TOGGLE_SIGN_UP',
  });
};

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
    case 'The password is invalid or the user does not have a password.':
      return 'The password is invalid or the user does not exist.';
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

  // Sign In With Facebook
  return firebase
    .auth()
    .createUserAndRetrieveDataWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch({
        type: 'USER_LOGGED_IN',
        payload: response.user,
      });
      return dispatch({
        type: 'LOADING',
        payload: false,
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

export const signIn = () => (dispatch, getState) => {
  const { email, password } = getState().auth;
  // Check for email and password
  if (!(email && password)) {
    return dispatch({
      type: 'ERROR',
      payload: 'Please enter both an email and a password.',
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
  return firebase
    .auth()
    .signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch({
        type: 'USER_LOGGED_IN',
        payload: response.user,
      });
      return dispatch({
        type: 'LOADING',
        payload: false,
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

export const checkAuthPersistance = () => (dispatch) => {
  // Set LOADING
  dispatch({
    type: 'LOADING',
    payload: true,
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: 'USER_LOGGED_IN',
        payload: user,
      });
      dispatch({
        type: 'LOADING',
        payload: false,
      });
    } else {
      dispatch({
        type: 'LOADING',
        payload: false,
      });
    }
  });
};

export const forgotPassword = () => (dispatch, getState) => {
  const { email } = getState().auth;
  const actionCodeSettings = {
    iOS: {
      bundleId: 'com.getcorvid.corvid',
    },
  };

  dispatch({
    type: 'FORGOT_PASSWORD',
    payload: true,
  });
  dispatch({
    type: 'ERROR',
    payload: 'Check your email for a reset link',
  });
  firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
    .catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: transformErrorMessage(error.message),
      });
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: 'LOADING',
    payload: true,
  });
  firebase.auth().signOut()
    .then(() => {
      dispatch({
        type: 'SIGNOUT',
      });
      dispatch({
        type: 'LOADING',
        payload: false,
      });
    });
};

export const changePassword = () => (dispatch, getState) => {
  AlertIOS.prompt(
    'Please enter a new password.',
    null,
    (password) => {
      dispatch({
        type: 'LOADING',
        payload: true,
      });
      getState().auth.user.updatePassword(password)
        .then(() => {
          dispatch({
            type: 'LOADING',
            payload: false
          });
          AlertIOS.alert('Password Successully Updated');
        })
        .catch((err) => {
          dispatch({
            type: 'LOADING',
            payload: false
          });
          if (err.code ==="auth/weak-password"){
            AlertIOS.alert("Weak password try again.");
          } else {
            AlertIOS.alert("You haven't logged in for a while, please log out and try again.");
          }
        });
    }
  );
};

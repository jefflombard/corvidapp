export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text,
  };
};

export const authChanged = (boolean) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: boolean,
  };
};

export const signUp = (email,password) => {
  return {
    type: 'SIGN_UP',
    payload: text,
  };
};

export const signIn = (email,password) => {
  return {
    type: 'SIGN_IN',
    payload: text,
  };
};
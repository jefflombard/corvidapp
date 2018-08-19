export const toggleSignUp = () => (
  {
    type: 'TOGGLE_SIGN_UP',
  }
);

export const onConfirmPasswordChange = text => (dispatch, getState) => {
  dispatch(
    {
      type: 'CONFIRM_PASSWORD_TEXT_CHANGED',
      payload: text,
    },
  );
  const { password, confirmPassword } = getState().auth;
  return dispatch({
    type: 'CHANGE_PASSWORD_MATCH',
    payload: (password === confirmPassword),
  });
};

export const onEmailChange = text => (dispatch, getState) => {
  dispatch(
    {
      type: 'EMAIL_TEXT_CHANGED',
      payload: text,
    },
  );
  const { password, confirmPassword } = getState().auth;
  return dispatch({
    type: 'CHANGE_PASSWORD_MATCH',
    payload: (password === confirmPassword),
  });
};

export const onPasswordChange = text => (dispatch, getState) => {
  dispatch({
    type: 'PASSWORD_TEXT_CHANGED',
    payload: text,
  });
  const { password, confirmPassword } = getState().auth;
  return dispatch({
    type: 'CHANGE_PASSWORD_MATCH',
    payload: (password === confirmPassword),
  });
};

const initialState = {
  isSignUp: false,
  password: '',
  confirmPassword: '',
  email: '',
};

export default (state = initialState, action) => {
  const { isSignUp, password, confirmPassword } = state;
  const passwordMatch = confirmPassword === password;

  switch (action.type) {
    case 'TOGGLE_SIGN_UP':
      return {
        ...state,
        isSignUp: !isSignUp,
      };
    case 'EMAIL_TEXT_CHANGED':
      return {
        ...state,
        email: action.payload,
      };
    case 'PASSWORD_TEXT_CHANGED':
      return {
        ...state,
        password: action.payload,
        passwordMatch,
      };
    case 'CONFIRM_PASSWORD_TEXT_CHANGED':
      return {
        ...state,
        confirmPassword: action.payload,
        passwordMatch,
      };
    default:
      return state;
  }
};

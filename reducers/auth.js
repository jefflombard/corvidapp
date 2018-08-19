const initialState = {
  isSignUp: false,
  password: '',
  confirmPassword: '',
  email: '',
};

export default (state = initialState, action) => {
  const { isSignUp } = state;

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
      };
    case 'CONFIRM_PASSWORD_TEXT_CHANGED':
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case 'CHANGE_PASSWORD_MATCH':
      return {
        ...state,
        passwordMatch: action.payload,
      };
    default:
      return state;
  }
};

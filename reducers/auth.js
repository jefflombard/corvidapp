const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STATUS_CHANGED':
      return {
        ...state,
          authorized: action.payload
      }
    case 'EMAIL_CHANGED':
      return {
        ...state,
        auth: {
          email: action.payload
        }
      };
    case 'PASSWORD_CHANGED':
      return {
        ...state,
        auth: {
          password: action.payload
        }
      };
    default:
      return state;
  }
};
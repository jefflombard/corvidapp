const initialState = {
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

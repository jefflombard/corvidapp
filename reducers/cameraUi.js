const initialState = {
  flash: false,
  front: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FLASH':
      return {
        ...state,
        flash: action.payload,
      };
    case 'TOGGLE_DIRECTION':
      return {
        ...state,
        front: action.payload,
      };
    default:
      return state;
  }
};

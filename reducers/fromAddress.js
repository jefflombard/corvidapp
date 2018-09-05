const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FROM_ADDRESS_UPDATE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'FROM_ADDRESS_UPDATE_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };
    case 'FROM_ADDRESS_UPDATE_ADDRESS2':
      return {
        ...state,
        address2: action.payload,
      };
    case 'FROM_ADDRESS_UPDATE_CITY':
      return {
        ...state,
        city: action.payload,
      };
    case 'FROM_ADDRESS_UPDATE_STATE':
      return {
        ...state,
        state: action.payload,
      };
    case 'FROM_ADDRESS_UPDATE_ZIP':
      return {
        ...state,
        zip: action.payload,
      };
    default:
      return state;
  }
};

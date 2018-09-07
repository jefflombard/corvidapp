const initialState = {
  toAddress: {
    name: 'Tap to set contact...',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  },
  message: 'Tap to set message...',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

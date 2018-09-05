import { Actions } from 'react-native-router-flux';

export const saveFromAddress = () => (dispatch, getState) => {
  // save logic

  Actions.postcards();
};

export const fromUpdateName = name => (dispatch, getState) => {
  // save logic
  dispatch({
    type: 'FROM_ADDRESS_UPDATE_NAME',
    payload: name,
  });
};

export const fromUpdateAddress = address => (dispatch, getState) => {
  // save logic
  dispatch({
    type: 'FROM_ADDRESS_UPDATE_ADDRESS',
    payload: address,
  });
};

export const fromUpdateAddress2 = address2 => (dispatch, getState) => {
  // save logic
  dispatch({
    type: 'FROM_ADDRESS_UPDATE_ADDRESS2',
    payload: address2,
  });
};

export const fromUpdateCity = city => (dispatch, getState) => {
  // save logic
  dispatch({
    type: 'FROM_ADDRESS_UPDATE_CITY',
    payload: city,
  });
};

export const fromUpdateState = state => (dispatch, getState) => {
  // save logic
  dispatch({
    type: 'FROM_ADDRESS_UPDATE_STATE',
    payload: state,
  });
};

export const fromUpdateZip = zip => (dispatch, getState) => {
  // save logic
  dispatch({
    type: 'FROM_ADDRESS_UPDATE_ZIP',
    payload: zip,
  });
};

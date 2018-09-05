import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import { AlertIOS } from 'react-native';

export const saveFromAddress = () => (dispatch, getState) => {
  // save logic
  const { fromAddress, auth } = getState();
  const db = firebase.firestore();
  const userId = auth.user.uid;

  // Set Loading
  dispatch({
    type: 'LOADING',
    payload: true,
  });

  db.collection('users').doc(userId).set({
    fromAddress,
  })
    .then(() => {
      // Remove Loading
      dispatch({
        type: 'LOADING',
        payload: false,
      });
      // Navigate back to postcard
      Actions.postcards();
    })
    .catch((err) => {
      // Remove Loading
      dispatch({
        type: 'LOADING',
        payload: false,
      });

      // Alert Error
      AlertIOS.alert(err);
    });
};

export const fromUpdateName = name => ({
  type: 'FROM_ADDRESS_UPDATE_NAME',
  payload: name,
});

export const fromUpdateAddress = address => ({
  type: 'FROM_ADDRESS_UPDATE_ADDRESS',
  payload: address,
});

export const fromUpdateAddress2 = address2 => ({
  type: 'FROM_ADDRESS_UPDATE_ADDRESS2',
  payload: address2,
});

export const fromUpdateCity = city => ({
  type: 'FROM_ADDRESS_UPDATE_CITY',
  payload: city,
});

export const fromUpdateState = state => ({
  type: 'FROM_ADDRESS_UPDATE_STATE',
  payload: state,
});

export const fromUpdateZip = zip => ({
  type: 'FROM_ADDRESS_UPDATE_ZIP',
  payload: zip,
});

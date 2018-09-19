export const toggleFlash = () => (dispatch, getState) => {
  const { cameraUi } = getState();

  return dispatch({
    type: 'TOGGLE_FLASH',
    payload: !cameraUi.flash,
  });
};

export const toggleDirection = () => (dispatch, getState) => {
  const { cameraUi } = getState();

  return dispatch({
    type: 'TOGGLE_DIRECTION',
    payload: !cameraUi.front,
  });
};

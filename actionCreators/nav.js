import { Actions } from 'react-native-router-flux';

export const openSettings = () => () => {
  Actions.settings();
};

export const updateInfo = () => () => {
  Actions.updateInfo();
};

export const goHome = () => () => {
  Actions.postcards();
};

export const newPostcard = () => () => {
  Actions.preview();
};

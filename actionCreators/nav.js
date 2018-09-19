import { Actions } from 'react-native-router-flux';

export const openSettings = () => () => {
  Actions.settings();
};

export const updateInfo = () => () => {
  Actions.updateInfo();
};

export const goHome = () => () => {
  Actions.posttab();
};

export const newPostcard = () => () => {
  Actions.newPostcard();
};

export const postcardPhoto = () => () => {
  Actions.postcardPhoto();
};

export const goBack = () => () => {
  Actions.pop();
};

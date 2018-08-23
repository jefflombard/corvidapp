import { Actions } from 'react-native-router-flux';

export const openSettings = () => {
  Actions.settings();
};

export const updateInfo = () => {
  Actions.updateInfo();
};

export const goBack = () => {
  Actions.pop();
};

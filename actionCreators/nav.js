import { Actions } from 'react-native-router-flux';

export const openSettings = () => {
  Actions.settings();
};

export const goBack = () => {
  Actions.pop();
};

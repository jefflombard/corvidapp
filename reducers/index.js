import { combineReducers } from 'redux';

import auth from './auth';
import ui from './ui';
import fromAddress from './fromAddress';
import newPostcard from './newPostcard';

export default combineReducers({
  auth,
  ui,
  fromAddress,
  newPostcard,
});

import {combineReducers} from 'redux';

import user from './userReducer';
import game from './gameReducer';
import gameHistory from './gameHistoryReducer';

export default combineReducers({
  user,
  game,
  gameHistory
});

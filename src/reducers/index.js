import {combineReducers} from 'redux';

import user from './userReducer';
import page from './pageReducer';
import game from './gameReducer';
import gameHistory from './gameHistoryReducer';

export default combineReducers({
  user,
  page,
  game,
  gameHistory
});

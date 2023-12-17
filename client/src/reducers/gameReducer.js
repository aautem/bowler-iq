import {getCurrentScore} from './../utilities/actionHelpers';

export default function reducer(state = {}, action) {
  // action.payload = complete game object
  if (action.type === 'LOAD_GAME') {
    return action.payload;
  }
  // action.payload = complete new game object template with defaults
  if (action.type === 'NEW_GAME') {
    return action.payload;
  }
  // action.payload = complete game object
  if (action.type === 'BOWL_FIRST_BALL') {
    return {
      ...state,
      frames: action.payload.frames,
      score: getCurrentScore(action.payload.frames)
    };
  }
  // action.payload = complete game object
  if (action.type === 'BOWL_SECOND_BALL') {
    return {
      ...state,
      frames: action.payload.frames,
      score: getCurrentScore(action.payload.frames)
    };
  }
  // action.payload = complete game object
  if (action.type === 'BOWL_TENTH_FRAME') {
    return {
      ...state,
      frames: action.payload.frames,
      score: getCurrentScore(action.payload.frames)
    };
  }

  if (action.type === 'ADD_DATE') {
    return {...state, date: action.payload}
  }

  return state;
};

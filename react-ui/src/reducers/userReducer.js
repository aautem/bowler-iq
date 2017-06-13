export default function reducer(state = {}, action) {
  // action.payload = complete user object
  if (action.type === 'GET_USER') {
    return action.payload;
  }
  // action.payload = updated stats object
  if (action.type === 'UPDATE_USER_STATS') {
    return {...state, stats: action.payload};
  }
  // if no match above
  return state;
};

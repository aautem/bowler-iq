const initialState = {};

export default function reducer(state = initialState, action) {
  // action.payload = complete game object
  if (action.type === 'LOAD_GAME') {
    return action.payload;
  }
  // action.payload = complete new game object template with defaults
  if (action.type === 'NEW_GAME') {
    return action.payload;
  }
  // if no match above
  return state;
};

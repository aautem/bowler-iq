export default function reducer(state = [], action) {
  // action.payload = array of game objects
  if (action.type === 'LOAD_GAMES') {
    return action.payload;
  }
  // if no match above
  return state;
};

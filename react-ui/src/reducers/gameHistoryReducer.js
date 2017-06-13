export default function reducer(state = [], action) {
  // action.payload = array of game objects
  if (action.type === 'LOAD_GAMES') {
    return action.payload;
  }
  // action.payload = new game object to add to array
  if (action.type === 'UPDATE_GAME_HISTORY') {
    // ADD NEW GAME TO ARRAY AND SORT BY DATE
    var gameHistory = state.slice();
    gameHistory.unshift(action.payload);
    return gameHistory;
  }
  // if no match above
  return state;
};

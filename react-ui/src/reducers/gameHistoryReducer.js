const initialState = {
  games: [] // array of game objects
};

export default function reducer(state = initialState, action) {
  // action.payload = complete game object
  if (action.type === 'SAVE_GAME') {
    let games = state.games.slice();
    games.push(action.payload);
    return {...state, games: games};
  }
  // if no match above
  return state;
};

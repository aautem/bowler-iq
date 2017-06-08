const initialState = {
  id: 4,
  name: 'Alex Autem',
  username: 'aautem',
  games: [7],
  stats: {
    highScore: null,
    average: null,
    totalPins: null,
    totalFrames: null
  },
  badges: ['thisIsSparta']
};

export default function reducer(state = initialState, action) {
  // action.payload = complete user object
  if (action.type === 'GET_USER') {
    return action.payload;
  }
  // action.payload = game id
  if (action.type === 'ADD_GAME') {
    let games = state.games.slice();
    games.push(action.payload);
    return {...state, games: games};
  }
  // action.payload = badge name
  if (action.type === 'ADD_BADGE') {
    let badges = state.badges.slice();
    badges.push(action.payload);
    return {...state, badges: badges};
  }
  // if no match above
  return state;
};

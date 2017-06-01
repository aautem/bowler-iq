const initialState = {
  user: {
    id: null,
    username: null,
    games: [],
    stats: {
      highScore: null,
      average: null,
      totalPins: null,
      totalFrames: null
    },
    badges: []
  }
};

export default function reducer(state = initialState, action) {
  // action.payload = complete user object
  if (action.type === 'GET_USER') {
    return {
      ...state,
      user: action.payload
    };
  }
  // action.payload = game id
  if (action.type === 'NEW_GAME') {
    let games = state.games.slice();
    games.push(action.payload);
    return {
      ...state,
      user: {...state.user, games: games}
    };
  }
  // action.payload = badge name
  if (action.type === 'ADD_BADGE') {
    let badges = state.badges.slice();
    badges.push(action.payload);
    return {
      ...state,
      user: {...state.user, badges: badges}
    };
  }
  // if no match above
  return {
    ...state,
    user: {...state.user}
  };
};

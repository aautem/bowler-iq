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
    return {
      ...state,
      user: {...state.user, games: games.push(action.payload)}
    };
  }
  // action.payload = badge name
  if (action.type === 'ADD_BADGE') {
    return {
      ...state,
      user: {...state.user, badges: badges.push(action.payload)}
    };
  }
  // if no match above
  return {
    ...state,
    user: {...state.user}
  };
};

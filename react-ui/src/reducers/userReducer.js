const initialState = {
  id: 4,
  name: 'Alex Autem',
  username: 'aautem',
  games: [
    {
      date: '06/08/2017',
      score: 267
    },
    {
      date: '04/12/2017',
      score: 134
    },
    {
      date: '01/18/2017',
      score: 122
    },
    {
      date: '12/22/2016',
      score: 283
    },
    {
      date: '09/14/2016',
      score: 160
    },
    {
      date: '07/07/2016',
      score: 102
    }
  ],
  stats: {
    average: 129.3,
    highScore: 206,
    totalScore: 7370,
    totalGames: 57,
    totalFrames: 570,
    averageFrame: 12.9,
    openFrames: 29,
    closedFrames: 541,
    closePercent: 0.949,
    totalStrikes: 133,
    totalSpares: 105,
    totalSplits: 27,
    gutterballs: 14,
    totalPins: 4523
  },
  badges: {
    f01: true,
    f02: true,
    f03: true,
    f04: false,
    f05: true,
    f06: true,
    f07: false,
    f08: false,
    f09: true,
    f10: false,
    f11: true,
    f12: false
  }
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

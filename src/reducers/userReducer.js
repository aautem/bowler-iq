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
      score: 267
    },
    {
      date: '12/22/2016',
      score: 267
    },
    {
      date: '09/14/2016',
      score: 267
    },
    {
      date: '07/07/2016',
      score: 267
    }
  ],
  stats: {
    highScore: 206,
    average: 129.3,
    totalPins: 9687,
    totalFrames: 192
  },
  badges: ['thisIsSparta', 'gobbleGobble', 'oneHunna', 'steeeRike']
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

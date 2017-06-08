export function getUser() {
  return {
    type: 'GET_USER',
    payload: {
      id: 1,
      username: 'aautem',
      games: [],
      stats: {
        highScore: 206,
        average: 165,
        totalPins: 10482,
        totalFrames: 948
      },
      badges: ['turkey', 'gobbleGobble', 'thisIsSparta']
    }
  };
};

export function addGame(gameId) {
  return {
    type: 'ADD_GAME',
    payload: gameId
  };
};

export function addBadge(badge) {
  return {
    type: 'ADD_BADGE',
    payload: badge
  };
};

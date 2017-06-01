export function getUser() {
  return {
    type: 'GET_USER',
    payload: {
      user: {
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
    }
  };
};

export function newGame(gameId) {
  return {
    type: 'NEW_GAME',
    payload: gameId
  };
};

export function addBadge(badge) {
  return {
    type: 'ADD_BADGE',
    payload: badge
  };
};

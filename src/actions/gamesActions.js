export function loadGame(game) {
  return {
    type: 'LOAD_GAME',
    payload: game
  };
};

export function saveGame(gameSummary) {
  let gameSummary = {
    id: 20,
    date: 'Thu Jun 1, 2017',
    score: 156
  };

  return {
    type: 'SAVE_GAME',
    payload: gameSummary
  };
};

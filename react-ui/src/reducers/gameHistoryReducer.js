export default function reducer(state = [], action) {
  // action.payload = array of game objects
  if (action.type === 'LOAD_GAMES') {
    return action.payload;
  }
  // action.payload = new game object to add to array
  if (action.type === 'UPDATE_GAME_HISTORY') {
    // ADD NEW GAME TO ARRAY AND SORT BY DATE
    var gameHistory = state.slice();
    gameHistory.push(action.payload);

    // return b.date - a.date
    gameHistory.sort(function(a, b) {
      var aYear = parseInt(a.date.slice(0, 4), 10);
      var bYear = parseInt(b.date.slice(0, 4), 10);

      var aMonth = parseInt(a.date.slice(5, 7), 10);
      var bMonth = parseInt(b.date.slice(5, 7), 10);

      var aDay = parseInt(a.date.slice(8), 10);
      var bDay = parseInt(b.date.slice(8), 10);

      if (aYear !== bYear) {
        return bYear - aYear;
      } else if (aMonth !== bMonth) {
        return bMonth - aMonth;
      } else {
        return bDay - aDay;
      }
    });

    return gameHistory;
  }
  // if no match above
  return state;
};

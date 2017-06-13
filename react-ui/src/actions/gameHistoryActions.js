import axios from 'axios';

import {changePage} from './pageActions';

export function loadGames(userId) {
  return function(dispatch) {
    axios.get('/api/users/' + userId + '/games')
      .then(function(response) {
        // sort game history by date
        var gameHistory = response.data;

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

        dispatch({
          type: 'LOAD_GAMES',
          payload: gameHistory
        });
      })
      .then(function() {
        dispatch(changePage('home'));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

export function updateGameHistory(game) {
  return {
    type: 'UPDATE_GAME_HISTORY',
    payload: game
  };
};

import axios from 'axios';

import {changePage} from './pageActions';

export function loadGames(userId) {
  console.log('Loading Games.');
  return function(dispatch) {
    axios.get('/api/users/' + userId + '/games')
      .then(function(response) {
        console.log('Game History Response:', response.data);
        dispatch({
          type: 'LOAD_GAMES',
          payload: response.data
        });
      })
      .then(function() {
        console.log('Next LoadGames Block.');
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

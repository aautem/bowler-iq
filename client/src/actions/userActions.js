import axios from 'axios';

export function getUser(userId) {
  return function(dispatch) {
    axios.get('/api/users/' + userId)
      .then(function(response) {
        if (!response.data) {
          console.error('User does not exist.');
        } else {
          dispatch({
            type: 'GET_USER',
            payload: response.data
          });
        }
      })
      .catch(console.error);
  }
}

export function updateUserStats(user, newGame) {
  const updatedUser = Object.assign({}, user);

  updatedUser.totalGames ++;
  updatedUser.totalFrames += 10;
  updatedUser.totalScore += newGame.score;
  updatedUser.totalPins += newGame.totalPins;
  updatedUser.totalStrikes += newGame.strikes;
  updatedUser.totalSpares += newGame.spares;
  updatedUser.totalSplits += newGame.splits;
  updatedUser.gutterballs += newGame.gutterballs;
  updatedUser.openFrames += newGame.openFrames;
  updatedUser.closedFrames += newGame.closedFrames;
  updatedUser.average = (updatedUser.totalScore / updatedUser.totalGames).toFixed(1);
  updatedUser.averageFrame = updatedUser.totalScore / updatedUser.totalFrames;
  updatedUser.closePercent = updatedUser.closedFrames / updatedUser.totalFrames;

  if (newGame.score > updatedUser.highScore) {
    updatedUser.highScore = newGame.score;
  }

  axios
    .put('/api/users/' + user.id, { user: updatedUser })
    .catch(console.error);

  return {
    type: 'GET_USER',
    payload: updatedUser,
  };
};

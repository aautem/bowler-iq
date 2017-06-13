import axios from 'axios';

export function getUser(userId) {
  console.log('Logging In.');
  return function(dispatch) {
    axios.get('/api/users/' + userId)
      .then(function(response) {
        console.log('User Response:', response.data);
        if (!response.data) {
          console.log('User Does Not Exist.');
        } else {
          dispatch({
            type: 'GET_USER',
            payload: response.data
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export function updateUserStats(user, newGame) {
  console.log('Updating User Stats:', user);
  console.log('With New Game:', newGame);

  var stats = Object.assign({}, user.stats);

  // go through each stat and update
  stats.totalGames ++;
  stats.totalFrames += 10;
  stats.totalScore += newGame.score;
  stats.totalPins += newGame.totalPins;
  stats.totalStrikes += newGame.strikes;
  stats.totalSpares += newGame.spares;
  stats.totalSplits += newGame.splits;
  stats.gutterballs += newGame.gutterballs;
  stats.openFrames += newGame.openFrames;
  stats.closedFrames += newGame.closedFrames;
  stats.average = stats.totalScore / stats.totalGames;
  stats.averageFrame = stats.totalScore / stats.totalFrames;
  stats.closePercent = stats.closedFrames / stats.totalFrames;

  if (newGame.score > stats.highScore) {
    stats.highScore = newGame.score;
  }

  // save updated user stats to database
  axios.put('/api/users/' + user._id, {
    user: {
      stats: stats
    }
  })
    .then(function(response) {
      console.log('User Stats Updated:', response.data);
    })
    .catch(function(error) {
      console.log(error);
    });

  // send to reducer
  return {
    type: 'UPDATE_USER_STATS',
    payload: stats
  };
};

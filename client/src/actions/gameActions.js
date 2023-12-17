import axios from 'axios';

import {appendOptions} from './../utilities/actionHelpers';
import {changePage} from './pageActions';
import {scoreGame} from './../utilities/actionHelpers';
import {updateGameHistory} from './gameHistoryActions';

export function newGame(userId) {
  let gameTemplate = {
    userId: userId,
    date: null, // date the game was played
    score: 0, // final score for game
    spares: 0, // number of spares in game
    splits: 0, // number of splits in game
    strikes: 0, // number of strikes in game
    gutterballs: 0, // 0 pins on first frame (and second if gutter on first)
    averageFrame: 0,
    openFrames: 0,
    closedFrames: 0,
    closePercent: 0,
    totalPins: 0,

    frames: [ // array of frame objects (frameNumber = index + 1)
      {
        frame: 1, // frameNumber
        ball1: { // first ball of frame
          disabled: false, // score selector disabled in DOM
          score: null // pins knocked down by this ball
        },
        ball2: { // second ball of frame
          disabled: true,
          score: null
        },
        frameScore: null, // total score for frame (for graphing purposes)
        totalScore: null // current total score in game (cumulative)
      },
      {
        frame: 2,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      },
      {
        frame: 3,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      },
      {
        frame: 4,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      },
      {
        frame: 5,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      },
      {
        frame: 6,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      },
      {
        frame: 7,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      },
      {
        frame: 8,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      },
      {
        frame: 9,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      },
      {
        frame: 10,
        ball1: {
          disabled: true,
          score: null
        },
        ball2: {
          disabled: true,
          score: null
        },
        ball3: {
          disabled: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      }
    ]
  };
  return {
    type: 'NEW_GAME',
    payload: gameTemplate
  }
};

export function saveGame(game) {
  return function(dispatch) {
    dispatch(changePage('loading'));

    axios.post('/api/games', {
      userId: game.userId,
      averageFrame: game.averageFrame,
      closePercent: game.closePercent,
      closedFrames: game.closedFrames,
      date: game.date,
      frames: game.frames,
      gutterballs: game.gutterballs,
      openFrames: game.openFrames,
      score: game.score,
      spares: game.spares,
      splits: game.splits,
      strikes: game.strikes,
      totalPins: game.totalPins
    })
    .then(function(response) {
      dispatch(updateGameHistory(response.data));
      dispatch(loadGame(response.data));
    })
    .catch(console.error);
  }
};

export function loadGame(game) {
  return function(dispatch) {
    axios
      .get('/api/games/' + game.id)
      .then(response => {
        dispatch({
          type: 'LOAD_GAME',
          payload: response.data,
        });

        dispatch(changePage('game'));
      })
      .catch(console.error);
  };
};

export function bowlFirstBall(game, frameNumber, score) {
  // game = complete game object (game.frames to access scorecard)
  // frameNumber = number
  // score = string (convert to number below)
  score = parseInt(score, 10);

  // add pin count
  game.totalPins += score;

  // handle gutterball
  if (score === 0) {
    game.gutterballs ++;
  }

  // update score on frame and disable first ball
  game.frames[frameNumber - 1].ball1.score = score;
  game.frames[frameNumber - 1].ball1.disabled = true;

  // handle strike
  if (score === 10) {
    game.frames[frameNumber - 1].strike = true;
    game.frames[frameNumber].ball1.disabled = false;
    game.strikes ++;
    game.closedFrames ++;
  }

  // handle everything else
  if (score < 10) {
    appendOptions('two-' + frameNumber, 10 - score, '/');

    // activate next ball in frame
    game.frames[frameNumber - 1].ball2.disabled = false;
  }

  // score game in case updates from spare or strike
  game.frames = scoreGame(game.frames);

  return {
    type: 'BOWL_FIRST_BALL',
    payload: game
  };
};

export function bowlSecondBall(game, frameNumber, score) {
  // game = complete game object (game.frames to access scorecard)
  // frameNumber = number
  // score = string (convert to number below)
  score = parseInt(score, 10);

  // add pin count
  game.totalPins += score;

  // update score on frame and disable second ball
  game.frames[frameNumber - 1].ball2.score = score;
  game.frames[frameNumber - 1].ball2.disabled = true;

  // handle spare
  if (game.frames[frameNumber - 1].ball1.score + score === 10) {
    game.frames[frameNumber - 1].spare = true;
    game.spares ++;
    game.closedFrames ++;
  } else {
    // open frame
    game.openFrames ++;
  }

  game.frames = scoreGame(game.frames);

  // activate first ball, next frame
  game.frames[frameNumber].ball1.disabled = false;

  return {
    type: 'BOWL_SECOND_BALL',
    payload: game
  };
};

export function bowlTenthFrame(game, ballNumber, score) {
  // game = complete game object (game.frames to access scorecard)
  // ballNumber = number
  // score = string (convert to number below)
  score = parseInt(score, 10);

  // add pin count
  game.totalPins += score;

  if (ballNumber === 1) {
    // set ball1 score
    game.frames[9].ball1.score = score;
    // disable ball1 select
    game.frames[9].ball1.disabled = true;

    // add options to ball2 select
    // IF STRIKE, ADD ALL OPTIONS
    if (score === 10) {
      game.strikes ++;
      game.closedFrames ++;
      appendOptions('two-10', 10, 'X');
    }
    // IF NOT A STRIKE, ADD PINS LEFT
    if (score < 10) {
      appendOptions('two-10', 10 - score, '/');
    }
    // activate ball2 select
    game.frames[9].ball2.disabled = false;
  }

  // APPEND OPTIONS TO BALL3 SELECT
  if (ballNumber === 2) {
    // set ball2 score
    game.frames[9].ball2.score = score;
    // disable ball2 select
    game.frames[9].ball2.disabled = true;

    // add options to ball3 select
    // IF BALL1 STRIKE
    if (game.frames[9].ball1.score === 10) {
      // IF BALL 2 STRIKE
        // ADD ALL OPTIONS
      if (score === 10) {
        game.strikes ++;
        appendOptions('three-10', 10, 'X');
      } else { // OTHERWISE
        // ADD PINSLEFT (10 - ball2.score)
        appendOptions('three-10', 10 - score, '/');
      }
      game.frames[9].ball3.disabled = false;
    }

    // IF BALL2 SPARE
      // ADD ALL OPTIONS
    if (game.frames[9].ball1.score + game.frames[9].ball2.score === 10) {
      game.spares ++;
      game.closedFrames ++;
      appendOptions('three-10', 10, 'X');
      game.frames[9].ball3.disabled = false;
    } else {
      game.openFrames ++;
    }
  }

  if (ballNumber === 3) {
    // set ball3 score
    game.frames[9].ball3.score = score;
    // disable ball3 select
    game.frames[9].ball3.disabled = true;
    // if STRIKE, add STRIKE flag
    if (score === 10) {
      game.strikes ++;
    }
    // if SPARE, add SPARE flag
    if (score + game.frames[9].ball2.score === 10) {
      game.spares ++;
    }
  }

  // score game
  game.frames = scoreGame(game.frames);

  return {
    type: 'BOWL_TENTH_FRAME',
    payload: game
  };
};

export function addDate(date) {
  document.getElementById('game-date').disabled = true;

  return {
    type: 'ADD_DATE',
    payload: date
  };
};

import {scoreGame} from './../utilities/actionHelpers';
import {appendOptions} from './../utilities/actionHelpers';

export function newGame() {
  let gameTemplate = {
    date: null, // date the game was played
    score: 0, // final score for game
    strikes: 0, // number of strikes in game
    spares: 0, // number of spares in game
    splits: 0, // number of splits in game
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

// UPDATE WITH NEW GAME OBJECT FORMAT
export function loadGame(gameId) {
  // get game from db with id and send object as payload
  let game = {
    id: 7, // id for current game in database
    date: '2017-06-03', // date the game was played
    score: 174, // final score for game
    strikes: 4, // number of strikes in game
    spares: 4, // number of spares in game
    splits: 1, // number of splits in game
    frames: [ // array of frame objects (frameNumber = index + 1)
      {
        frame: 1, // frameNumber
        spare: true,
        ball1: { // first ball of frame
          disabled: true, // score selector disabled in DOM
          score: 5 // pins knocked down by this ball
        },
        ball2: { // second ball of frame
          disabled: true,
          score: 5
        },
        frameScore: 19, // total score for frame (for graphing purposes)
        totalScore: 19 // current total score in game (cumulative)
      },
      {
        frame: 2,
        spare: true,
        ball1: {
          disabled: true,
          score: 9
        },
        ball2: {
          disabled: true,
          score: 1
        },
        frameScore: 20,
        totalScore: 39
      },
      {
        frame: 3,
        strike: true,
        ball1: {
          disabled: true,
          score: 10
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: 27,
        totalScore: 66
      },
      {
        frame: 4,
        strike: true,
        ball1: {
          disabled: true,
          score: 10
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: 18,
        totalScore: 84
      },
      {
        frame: 5,
        split: true,
        ball1: {
          disabled: true,
          score: 7
        },
        ball2: {
          disabled: true,
          score: 1
        },
        frameScore: 8,
        totalScore: 92
      },
      {
        frame: 6,
        ball1: {
          disabled: true,
          score: 4
        },
        ball2: {
          disabled: true,
          score: 5
        },
        frameScore: 9,
        totalScore: 101
      },
      {
        frame: 7,
        strike: true,
        ball1: {
          disabled: true,
          score: 10
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: 27,
        totalScore: 128
      },
      {
        frame: 8,
        strike: true,
        ball1: {
          disabled: true,
          score: 10
        },
        ball2: {
          disabled: true,
          score: null
        },
        frameScore: 20,
        totalScore: 148
      },
      {
        frame: 9,
        spare: true,
        ball1: {
          disabled: true,
          score: 7
        },
        ball2: {
          disabled: true,
          score: 3
        },
        frameScore: 12,
        totalScore: 160
      },
      {
        frame: 10,
        ball1: {
          disabled: true,
          score: 2
        },
        ball2: {
          disabled: true,
          score: 8
        },
        ball3: {
          disabled: true,
          score: 4
        },
        frameScore: 14,
        totalScore: 174
      }
    ]
  };
  return {
    type: 'LOAD_GAME',
    payload: game
  };
};

export function bowlFirstBall(scorecard, frameNumber, score) {
  // scorecard = frames array from game object
  // frameNumber = number
  // score = string (convert to number below)
  score = parseInt(score, 10);

  // update score on scorecard and disable first ball
  scorecard[frameNumber - 1].ball1.score = score;
  scorecard[frameNumber - 1].ball1.disabled = true;

  // handle strike
  if (score === 10) {
    console.log('Strike!');
    scorecard[frameNumber - 1].strike = true;
    scorecard[frameNumber].ball1.disabled = false;
  }

  // handle everything else
  if (score < 10) {
    console.log('Good shot.');
    appendOptions('two-' + frameNumber, 10 - score, '/');

    // activate next ball in frame
    scorecard[frameNumber - 1].ball2.disabled = false;
  }

  // score game in case updates from spare or strike
  scorecard = scoreGame(scorecard);

  return {
    type: 'BOWL_FIRST_BALL',
    payload: {
      scorecard: scorecard,
      strike: scorecard[frameNumber - 1].strike
    }
  };
};

export function bowlSecondBall(scorecard, frameNumber, score) {
  // scorecard = frames array from game object
  // frameNumber = number
  // score = string (convert to number below)
  score = parseInt(score, 10);

  // update score on scorecard and disable second ball
  scorecard[frameNumber - 1].ball2.score = score;
  scorecard[frameNumber - 1].ball2.disabled = true;

  if (scorecard[frameNumber - 1].ball1.score + score === 10) {
    scorecard[frameNumber - 1].spare = true;
  }

  scorecard = scoreGame(scorecard);

  // activate first ball, next frame
  scorecard[frameNumber].ball1.disabled = false;

  return {
    type: 'BOWL_SECOND_BALL',
    payload: {
      scorecard: scorecard,
      spare: scorecard[frameNumber - 1].spare
    }
  };
};

export function bowlTenthFrame(scorecard, ballNumber, score) {
  // scorecard = frames array from game object
  // ballNumber = number
  // score = string (convert to number below)
  score = parseInt(score, 10);
  let strike = false;
  let spare = false;

  if (ballNumber === 1) {
    console.log('Ball1.');
    // set ball1 score
    scorecard[9].ball1.score = score;
    // disable ball1 select
    scorecard[9].ball1.disabled = true;

    // add options to ball2 select
    // IF STRIKE, ADD ALL OPTIONS
    if (score === 10) {
      strike = true;
      appendOptions('two-10', 10, 'X');
    }
    // IF NOT A STRIKE, ADD PINS LEFT
    if (score < 10) {
      appendOptions('two-10', 10 - score, '/');
    }
    // activate ball2 select
    scorecard[9].ball2.disabled = false;
  }

  // APPEND OPTIONS TO BALL3 SELECT
  if (ballNumber === 2) {
    console.log('Ball2.');
    // set ball2 score
    scorecard[9].ball2.score = score;
    // disable ball2 select
    scorecard[9].ball2.disabled = true;

    // add options to ball3 select
    // IF BALL1 STRIKE
    if (scorecard[9].ball1.score === 10) {
      // IF BALL 2 STRIKE
        // ADD ALL OPTIONS
      if (score === 10) {
        strike = true;
        appendOptions('three-10', 10, 'X');
      } else { // OTHERWISE
        // ADD PINSLEFT (10 - ball2.score)
        appendOptions('three-10', 10 - score, '/');
      }
      scorecard[9].ball3.disabled = false;
    }

    // IF BALL2 SPARE
      // ADD ALL OPTIONS
    if (scorecard[9].ball1.score + scorecard[9].ball2.score === 10) {
      spare = true;
      appendOptions('three-10', 10, 'X');
      scorecard[9].ball3.disabled = false;
    }
  }

  if (ballNumber === 3) {
    console.log('Ball3.');
    // set ball3 score
    scorecard[9].ball3.score = score;
    // disable ball3 select
    scorecard[9].ball3.disabled = true;
    // if STRIKE, add STRIKE flag
    if (score === 10) {
      strike = true;
    }
    // if SPARE, add SPARE flag
    if (score + scorecard[9].ball2.score === 10) {
      spare = true;
    }
  }

  // score game
  scorecard = scoreGame(scorecard);

  return {
    type: 'BOWL_TENTH_FRAME',
    payload: {
      scorecard: scorecard,
      strike: strike,
      spare: spare
    }
  };
};

export function addDate(date) {
  console.log('Date:', date, typeof date);
  // disable date input
  document.getElementById('game-date').disabled = true;
  return {
    type: 'ADD_DATE',
    payload: date
  };
};

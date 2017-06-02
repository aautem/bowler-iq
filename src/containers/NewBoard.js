import React from 'react';

import NewFrame from './../components/NewFrame';
import NewTenth from './../components/NewTenth';

import './../styles/index.css';

let game = {
  id: null,
  date: null,
  score: null,
  frames: [
    {
      frame: 1,
      ball1: {
        disabled: false,
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
        disable: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    }
  ]
};

let scoreGame = function() {
  // loop through each frame and score it (adding score to frame)
  game.frames.forEach((frame, index) => {
    // UPDATE SCORE ON STATE
  });
};

let createOption = function(value, text) {
  let option = document.createElement('option');
  option.value = '' + value;
  option.innerHTML = '' + text;
  return option;
};

let bowlFirst = function(frame, score) {
  // make score a number -- score are now both numbers
  score = parseInt(score);
  game.frames[frame - 1].ball1 = score;

  if (score === 10) {
    game.frames[frame - 1].strike = true;
    game.frames[frame].ball1.disabled = false;
    console.log('Strike!', game);
    // score frame: loop over all frames and recalculate each one
    // frames with strikes and spares require future frames for scoring
  }

  if (score < 10) {
    // next ball select
    let ball2Select = document.getElementById('two-' + frame);
    let pinsLeft = 10 - score;

    for (let i = 1; i <= pinsLeft; i ++) {
      if (i === pinsLeft) {
        ball2Select.appendChild(createOption(i, '/'));
      } else {
        ball2Select.appendChild(createOption(i, i));
      }
    }
    // activate next ball
    game.frames[frame - 1].ball2.disabled = false;
    console.log('Nice Shot!', game);
  }
};

let bowlSecond = function(frame, score) {
  console.log('Current Scoresheet:', game);
  // activate first ball, next frame
  // recalculate each frame in scoresheet
};

// RENDER INTO DIV ROW
const NewBoard = (props) => {
  console.log('NewBoard Props:', props);

  return (
    <div className="col-12 board">

      <div className="row">
        <div className="col-1"></div>
        {game.frames.slice(0, 5).map((frame) => {
          return (
            <NewFrame
              key={frame.frame}
              frame={frame}
              bowlFirst={bowlFirst}
              bowlSecond={bowlSecond}
            />
          );
        })}
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        {game.frames.slice(5, 9).map((frame) => {
          return (
            <NewFrame
              key={frame.frame}
              frame={frame}
              bowlFirst={bowlFirst}
              bowlSecond={bowlSecond}
            />
          );
        })}
        <NewTenth frame={10} />
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default NewBoard;

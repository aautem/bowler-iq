import React from 'react';

import NewFrame from './NewFrame';
import NewTenth from './NewTenth';

import './index.css';

let game = {
  id: null,
  date: null,
  score: null,
  frames: [
    {
      frame: 1,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 2,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 3,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 4,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 5,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 6,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 7,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 8,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 9,
      ball1: null,
      ball2: null,
      score: null
    },
    {
      frame: 10,
      ball1: null,
      ball2: null,
      score: null
    }
  ]
}

let scoreFrame = function() {
  // score frame here
}

let createOption = function(value, text) {
  let option = document.createElement('option');
  option.value = '' + value;
  option.innerHTML = '' + text;
  return option;
}

let bowlFirst = function(frame, score) {
  score = parseInt(score); // frame and score are now both numbers
  game.frames[frame - 1].ball1 = score;

  if (score === 10) {
    console.log('Strike!');
    game.frames[frame - 1].strike = true;
    document.getElementById('one-' + (frame + 1)).disabled = false;
    // score frame: loop over all frames and recalculate each one
    // frames with strikes and spares require future frames for scoring
  }

  if (score < 10) {
    console.log('Nice Shot.');
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
    ball2Select.disabled = false;
    console.log('Scoresheet:', game);
  }
}

let bowlSecond = function(frame, score) {
  console.log('Current Scoresheet:', game);
  // activate first ball, next frame
  // recalculate each frame in scoresheet
}

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
              frame={frame.frame}
              score={frame.score}
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
            <NewFrame key={frame.frame} frame={frame.frame} />
          );
        })}
        <NewTenth frame={10} />
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default NewBoard;

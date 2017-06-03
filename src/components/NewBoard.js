import React from 'react';

import NewFrame from './NewFrame';
import NewTenth from './NewTenth';

// RENDER INTO DIV ROW
const NewBoard = (props) => {
  console.log('NewBoard Props:', props);
  return (
    <div className="col-12 board">

      <div className="row">
        <div className="col-1"></div>
        {props.game.frames.slice(0, 5).map((frame) => {
          return (
            <NewFrame
              key={frame.frame}
              scorecard={props.game.frames}
              frame={frame}
              bowlFirstBall={props.bowlFirstBall}
              bowlSecondBall={props.bowlSecondBall}
            />
          );
        })}
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        {props.game.frames.slice(5, 9).map((frame) => {
          return (
            <NewFrame
              key={frame.frame}
              scorecard={props.game.frames}
              frame={frame}
              bowlFirstBall={props.bowlFirstBall}
              bowlSecondBall={props.bowlSecondBall}
            />
          );
        })}
        <NewTenth
          scorecard={props.game.frames}
          frame={props.game.frames[9]}
          bowlTenthFrame={props.bowlTenthFrame}
        />
        <div className="col-1"></div>
      </div>

    </div>
  );
};

export default NewBoard;

import React from 'react';

import NewFrame from './NewFrame';
import NewTenth from './NewTenth';

const NewBoard = (props) => {
  console.log('NewBoard Props:', props);
  return (
    <div className="row">

      <div className="row frame-row">
        <div className="col s1"></div>
        {props.game.frames.slice(0, 5).map((frame) => {
          return (
            <div
              className="col s12 m2"
              key={frame.frame}
            >
              <NewFrame
                game={props.game}
                frame={frame}
                bowlFirstBall={props.bowlFirstBall}
                bowlSecondBall={props.bowlSecondBall}
              />
            </div>
          );
        })}
        <div className="col s1"></div>
      </div>

      <div className="row frame-row">
        <div className="col s1"></div>
        {props.game.frames.slice(5, 9).map((frame) => {
          return (
            <div
              className="col s12 m2"
              key={frame.frame}
            >
              <NewFrame
                game={props.game}
                frame={frame}
                bowlFirstBall={props.bowlFirstBall}
                bowlSecondBall={props.bowlSecondBall}
              />
            </div>
          );
        })}
        <div className="col s12 m2">
          <NewTenth
            game={props.game}
            frame={props.game.frames[9]}
            bowlTenthFrame={props.bowlTenthFrame}
          />
        </div>
        <div className="col s1"></div>
      </div>

    </div>
  );
};

export default NewBoard;

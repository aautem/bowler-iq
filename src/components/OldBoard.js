import React from 'react';

import OldFrame from './OldFrame';
import OldTenth from './OldTenth';

// RENDER INTO DIV ROW
const OldBoard = (props) => {
  console.log('OldBoard Props:', props);
  return (
    <div className="col-12 board">

      <div className="row">
        <div className="col-1"></div>
        {props.game.frames.slice(0, 5).map((frame) => {
          return (
            <OldFrame
              key={frame.frame}
              scorecard={props.game.frames}
              frame={frame}
            />
          );
        })}
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        {props.game.frames.slice(5, 9).map((frame) => {
          return (
            <OldFrame
              key={frame.frame}
              scorecard={props.game.frames}
              frame={frame}
            />
          );
        })}
        <OldTenth
          scorecard={props.game.frames}
          frame={props.game.frames[9]}
        />
        <div className="col-1"></div>
      </div>

    </div>
  );
};

export default OldBoard;

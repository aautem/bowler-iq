import React from 'react';

import OldFrame from './OldFrame';
import OldTenth from './OldTenth';

const OldBoard = (props) => {
  console.log('OldBoard Props:', props);
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
              <OldFrame
                scorecard={props.game.frames}
                frame={frame}
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
              <OldFrame
                scorecard={props.game.frames}
                frame={frame}
              />
            </div>
          );
        })}
        <div className="col s12 m2">
          <OldTenth
            scorecard={props.game.frames}
            frame={props.game.frames[9]}
          />
        </div>
        <div className="col s1"></div>
      </div>

    </div>
  );
};

export default OldBoard;

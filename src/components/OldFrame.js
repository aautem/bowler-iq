import React from 'react';

const OldFrame = (props) => {
  let ball1 = props.frame.ball1.score;
  let ball2 = props.frame.ball2.score;

  // convert spares and strikes
  if (ball1 === 10) {
    ball1 = 'X';
  }
  if (ball1 !== 10 && ball1 + ball2 === 10) {
    ball2 = '/';
  }

  return (
    <div className="col-2 frame">

      <div className="row">
        <div className="col-12">
          <h6>Frame {props.frame.frame}</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          {ball1}
        </div>

        <div className="col-6">
          {ball2}
        </div>
      </div>

      <div className="row">
        <div className="col-12 score">
          <span id={'score-' + props.frame.frame}>{props.frame.totalScore}</span>
        </div>
      </div>

    </div>
  );
};

export default OldFrame;

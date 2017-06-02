import React from 'react';

import './../styles/index.css';

const OldFrame = (props) => {
  console.log('OldFrame Props:', props);
  return (
    <div className="col-2 frame">

      <div className="row">
        <div className="col-12">
          <h6>Frame {props.frame.frame}</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          {props.frame.ball1}
        </div>
        <div className="col-6">
          {props.frame.ball2}
        </div>
      </div>

      <div className="row">
        <div className="col-12 score">
          {props.frame.score}
        </div>
      </div>

    </div>
  );
};

export default OldFrame;

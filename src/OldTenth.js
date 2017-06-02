import React from 'react';

import './index.css';

const OldTenth = (props) => {
  console.log('OldTenth Props:', props);
  return (
    <div className="col-2 frame">
      <div className="row">
        <div className="col-12">
          <h6>Frame {props.frame.frame}</h6>
        </div>

        <div className="row">
          <div className="col-4">
            {props.frame.ball1}
          </div>
          <div className="col-4">
            {props.frame.ball2}
          </div>
          <div className="col-4">
            {props.frame.ball3}
          </div>
        </div>

        <div className="row">
          <div className="col-12 score">
            {props.frame.score}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldTenth;

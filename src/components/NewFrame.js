import React from 'react';

import './../styles/index.css';

const NewFrame = (props) => {
  console.log('NewFrame Props:', props);
  return (
    <div className="col-2 frame">

      <div className="row">
        <div className="col-12">
          <h6>Frame {props.frame.frame}</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <select
            id={'one-' + props.frame.frame}
            onChange={(e) => {
              props.bowlFirstBall(props.scorecard, props.frame.frame, e.target.value);
            }}
            disabled={props.frame.ball1.disabled}
          >
            <option value="" defaultValue></option>
            <option value="0">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">X</option>
          </select>
        </div>

        <div className="col-6">
          <select
            id={'two-' + props.frame.frame}
            onChange={(e) => {
              props.bowlSecondBall(props.scorecard, props.frame.frame, e.target.value);
            }}
            disabled={props.frame.ball2.disabled}
          >
            <option value="" defaultValue></option>
            <option value="0">-</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-12 score">
          <span id={'score-' + props.frame.frame}>{props.frame.totalScore || '-'}</span>
        </div>
      </div>

    </div>
  );
};

export default NewFrame;

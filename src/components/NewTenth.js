import React from 'react';

const NewTenth = (props) => {
  console.log('NewTenth Props:', props);
  return (
    <div className="white z-depth-2 new-frame">

      <div className="row">
        <div className="col s12 blue darken-4">
          <h6>Frame {props.frame.frame}</h6>
        </div>
      </div>

      <div className="row frame-balls">
        <div className="col s4">
          <select
            id={'one-' + props.frame.frame}
            className="browser-default"
            onChange={(e) => {
              props.bowlTenthFrame(props.scorecard, 1, e.target.value);
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

        <div className="col s4">
          <select
            id={'two-' + props.frame.frame}
            className="browser-default"
            onChange={(e) => {
              props.bowlTenthFrame(props.scorecard, 2, e.target.value);
            }}
            disabled={props.frame.ball2.disabled}
          >
            <option value="" defaultValue></option>
            <option value="0">-</option>
          </select>
        </div>

        <div className="col s4">
          <select
            id={'three-' + props.frame.frame}
            className="browser-default"
            onChange={(e) => {
              props.bowlTenthFrame(props.scorecard, 3, e.target.value);
            }}
            disabled={props.frame.ball3.disabled}
          >
            <option value="" defaultValue></option>
            <option value="0">-</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col s12 frame-score">
          <span id={'score-' + props.frame.frame}>{props.frame.totalScore || '-'}</span>
        </div>
      </div>

    </div>
  );
};

export default NewTenth;

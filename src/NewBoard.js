import React from 'react';

import NewFrame from './NewFrame';
import NewTenth from './NewTenth';

import './index.css';

// RENDER INTO DIV ROW
const NewBoard = (props) => {
  console.log('NewBoard Props:', props);

  const topRow = [1, 2, 3, 4, 5];
  const botRow = [6, 7, 8, 9];

  return (
    <div className="col-12 board">

      <div className="row">
        <div className="col-1"></div>
        {topRow.map((frame) => {
          return (
            <NewFrame key={frame} frame={frame} />
          );
        })}
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        {botRow.map((frame) => {
          return (
            <NewFrame key={frame} frame={frame} />
          );
        })}
        <NewTenth frame={10} />
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default NewBoard;

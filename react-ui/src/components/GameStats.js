import React from 'react';

const GameStats = (props) => {
  return (
    <div className="blue darken-4 z-depth-5 game-stats">

      <h6>Game Score</h6>
      <span>{props.score}</span>
      <br/>
      <h6>Points/Frame</h6>
      <span>{props.average}</span>
      <br/>
      <h6>Total Strikes</h6>
      <span>{props.strikes}</span>
      <br/>
      <h6>Total Spares</h6>
      <span>{props.spares}</span>
      <br/>
      <h6>Closed Frames</h6>
      <span>{props.closedFrames}</span>
      <br/>
      <h6>Total Pins</h6>
      <span>{props.pins}</span>

    </div>
  );
};

export default GameStats;

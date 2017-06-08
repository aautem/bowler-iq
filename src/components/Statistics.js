import React from 'react';

const Statistics = (props) => {
  console.log('Statistics Props:', props);
  return (
    <div className="col s12 m5">
      <div className="blue darken-4 z-depth-5 game-stats">
        <h6>High Score</h6>
        <span>{props.stats.highScore}</span>
        <br/>
        <h6>Average Score</h6>
        <span>{props.stats.average}</span>
        <br/>
        <h6>Games Bowled</h6>
        <span>{props.stats.totalGames}</span>
        <br/>
        <h6>Frames Bowled</h6>
        <span>{props.stats.totalFrames}</span>
        <br/>
        <h6>Total Pins</h6>
        <span>{props.stats.totalPins}</span>
      </div>
    </div>
  );
};

export default Statistics;

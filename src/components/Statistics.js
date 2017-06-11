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
        <h6>Total Score</h6>
        <span>{props.stats.totalScore}</span>
        <br/>
        <h6>Games Bowled</h6>
        <span>{props.stats.totalGames}</span>
        <br/>
        <h6>Frames Bowled</h6>
        <span>{props.stats.totalFrames}</span>
        <br/>
        <h6>Average/Frame</h6>
        <span>{props.stats.averageFrame}</span>
        <br/>
        <h6>Open Frames</h6>
        <span>{props.stats.openFrames}</span>
        <br/>
        <h6>Closed Frames</h6>
        <span>{props.stats.closedFrames}</span>
        <br/>
        <h6>Close %</h6>
        <span>{props.stats.closePercent}</span>
        <br/>
        <h6>Total Strikes</h6>
        <span>{props.stats.totalStrikes}</span>
        <br/>
        <h6>Total Spares</h6>
        <span>{props.stats.totalSpares}</span>
        <br/>
        <h6>Total Splits</h6>
        <span>{props.stats.totalSplits}</span>
        <br/>
        <h6>Gutterballs</h6>
        <span>{props.stats.gutterballs}</span>
        <br/>
        <h6>Total Pins</h6>
        <span>{props.stats.totalPins}</span>
      </div>
    </div>
  );
};

export default Statistics;

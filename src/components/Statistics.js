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
        <span>100</span>
        <br/>
        <h6>Games Bowled</h6>
        <span>{props.stats.totalGames}</span>
        <br/>
        <h6>Frames Bowled</h6>
        <span>{props.stats.totalFrames}</span>
        <br/>
        <h6>Average/Frame</h6>
        <span>18.6</span>
        <br/>
        <h6>Open Frames</h6>
        <span>96</span>
        <br/>
        <h6>Closed Frames</h6>
        <span>117</span>
        <br/>
        <h6>Close %</h6>
        <span>67%</span>
        <br/>
        <h6>Total Strikes</h6>
        <span>133</span>
        <br/>
        <h6>Total Spares</h6>
        <span>105</span>
        <br/>
        <h6>Total Splits</h6>
        <span>62</span>
        <br/>
        <h6>Gutterballs</h6>
        <span>14</span>
        <br/>
        <h6>Total Pins</h6>
        <span>1087</span>
      </div>
    </div>
  );
};

export default Statistics;

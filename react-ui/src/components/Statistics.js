import React from 'react';

const Statistics = (props) => {
  return (
    <div className="col s12 m5">
      {props.stats &&
      <div className="blue darken-4 z-depth-5 game-stats">

        <h6>Games Bowled</h6>
        <span>{props.stats.totalGames}</span>
        <br/>
        <h6>Average Score</h6>
        <span>{props.stats.average}</span>
        <br/>
        <h6>High Score</h6>
        <span>{props.stats.highScore}</span>
        <br/>
        <h6>Total Strikes</h6>
        <span>{props.stats.totalStrikes}</span>
        <br/>
        <h6>Total Spares</h6>
        <span>{props.stats.totalSpares}</span>
        <br/>
        <h6>Total Score</h6>
        <span>{props.stats.totalScore}</span>

      </div>}
    </div>
  );
};

export default Statistics;

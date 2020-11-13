import React from 'react';

const Statistics = ({ stats }) => {
  const {
    average,
    highScore,
    totalGames,
    totalScore,
    totalSpares,
    totalStrikes,
  } = stats || {};

  return (
    <div className="col s12 m5">
      <div className="blue darken-4 z-depth-5 game-stats">
        <h6>Games Bowled</h6>
        <span>{totalGames}</span>
        <br/>
        <h6>Average Score</h6>
        <span>{average || 0}</span>
        <br/>
        <h6>High Score</h6>
        <span>{highScore}</span>
        <br/>
        <h6>Total Strikes</h6>
        <span>{totalStrikes}</span>
        <br/>
        <h6>Total Spares</h6>
        <span>{totalSpares}</span>
        <br/>
        <h6>Total Score</h6>
        <span>{totalScore}</span>
      </div>
    </div>
  );
};

export default Statistics;

import React from 'react';

const Statistics = (props) => {
  const { stats } = props;

  const {
    totalGames,
    average,
    highScore,
    totalStrikes,
    totalSpares,
    totalScore,
  } = stats || {};

  return (
    <div className="col s12 m5">
      {stats && (
        <div className="blue darken-4 z-depth-5 game-stats">
          <h6>Games Bowled</h6>
          <span>{isNaN(totalGames) ? 0 : totalGames}</span>
          <br/>
          <h6>Average Score</h6>
          <span>{average === 'NaN' ? 'n/a' : average}</span>
          <br/>
          <h6>High Score</h6>
          <span>{highScore || 'n/a'}</span>
          <br/>
          <h6>Total Strikes</h6>
          <span>{isNaN(totalStrikes) ? 0 : totalStrikes}</span>
          <br/>
          <h6>Total Spares</h6>
          <span>{isNaN(totalSpares) ? 0 : totalSpares}</span>
          <br/>
          <h6>Total Score</h6>
          <span>{isNaN(totalScore) ? 0 : totalScore}</span>
        </div>
      )}
    </div>
  );
};

export default Statistics;

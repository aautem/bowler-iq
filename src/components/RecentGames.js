import React from 'react';

const RecentGames = (props) => {
  console.log('RecentGames Props:', props);
  return (
    <div className="col s12 m6">
      <div className="grey darken-1 z-depth-5 stat-block">
        <div className="row">
          <div className="col s12">
            <h4>Recent Games</h4>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            Game 1
          </div>

          <div className="col s12 m4">
            Game 2
          </div>

          <div className="col s12 m4">
            Game 3
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <a>More Games</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentGames;

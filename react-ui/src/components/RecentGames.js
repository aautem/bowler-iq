import React from 'react';

import RecentScore from './RecentScore';

const RecentGames = (props) => {
  console.log('RecentGames Props:', props);
  return (
    <div className="col s12 m6">
      <div className="grey darken-1 z-depth-5 stat-block recent-games">

        <div className="row">
          <div className="col s12">
            <h4>Recent Games</h4>
          </div>
        </div>

        <div className="row">
          {props.games.slice(0, 3).map((game) => {
            return (
              <RecentScore
                key={game._id}
                date={game.date}
                score={game.score}
                loadGame={props.loadGame}
                changePage={props.changePage}
              />
            );
          })}
        </div>

        <div className="row">
          {props.games.slice(3, 6).map((game) => {
            return (
              <RecentScore
                key={game._id}
                date={game.date}
                score={game.score}
                loadGame={props.loadGame}
                changePage={props.changePage}
              />
            );
          })}
        </div>

        {props.games.length > 6 &&
        <div className="row">
          <div className="col s12">
            <a onClick={() => {console.log('Loading')}}>More Games...</a>
          </div>
        </div>}

      </div>
    </div>
  );
};

export default RecentGames;

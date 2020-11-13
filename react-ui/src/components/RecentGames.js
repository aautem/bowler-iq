import React from 'react';

import RecentScore from './RecentScore';

const RecentGames = ({ games, loadGame, changePage }) => {
  return (
    <div className="col s12 m6">
      <div className="grey darken-1 z-depth-5 stat-block recent-games">
        <div className="row">
          <div className="col s12">
            <h4>Recent Games</h4>
          </div>
        </div>

        <div className="row">
          {games.slice(0, 3).map((game) => {
            return (
              <RecentScore
                key={game.id}
                game={game}
                loadGame={loadGame}
              />
            );
          })}
        </div>

        <div className="row">
          {games.slice(3, 6).map((game) => {
            return (
              <RecentScore
                key={game.id}
                game={game}
                loadGame={loadGame}
              />
            );
          })}
        </div>

        {games.length > 6 && (
          <div className="row">
            <div className="col s12">
              <a onClick={() => {changePage('history')}}>More Games...</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentGames;

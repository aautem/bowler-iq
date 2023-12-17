import React from 'react';

const GameHistory = ({ gameHistory, loadGame }) => {
  return (
    <div className="section grey lighten-2">
      <div className="container center-align">
        {gameHistory.map((game) => {
          return (
            <div className="row" key={game.id}>
              <a
                className="waves-effect waves-light btn blue darken-4"
                onClick={() => {loadGame(game)}}
              >
                {game.date + '  //  ' + game.score}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameHistory;

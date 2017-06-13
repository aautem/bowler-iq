import React from 'react';

const GameHistory = (props) => {
  return (
    <div className="section grey lighten-2">
      <div className="container center-align">
        {props.gameHistory.map((game) => {
          return (
            <div className="row" key={game._id}>
              <a
                className="waves-effect waves-light btn blue darken-4"
                onClick={() => {props.loadGame(game)}}
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

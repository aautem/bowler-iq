import React from 'react';

const RecentScore = ({ game, loadGame }) => {
  return (
    <div className="col s12 m4">
      <div
        className="blue darken-4 z-depth-2 recent-score"
        onClick={() => {
          loadGame(game);
        }}
      >
        <div><h6>{game.date}</h6></div>
        <div><span>{game.score}</span></div>
      </div>
    </div>
  );
};

export default RecentScore;

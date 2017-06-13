import React from 'react';

const RecentScore = (props) => {
  return (
    <div className="col s12 m4">
      <div
        className="blue darken-4 z-depth-2 recent-score"
        onClick={() => {
          props.loadGame(props.game);
        }}
      >
        <div><h6>{props.game.date}</h6></div>
        <div><span>{props.game.score}</span></div>
      </div>
    </div>
  );
};

export default RecentScore;

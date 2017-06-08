import React from 'react';

const RecentScore = (props) => {
  console.log('RecentScore Props:', props);
  return (
    <div className="col s12 m4">
      <div
        className="blue darken-4 z-depth-2 recent-score"
        onClick={() => {console.log('Loading')}}
      >
        <div><h6>{props.date}</h6></div>
        <div><span>{props.score}</span></div>
      </div>
    </div>
  );
};

export default RecentScore;

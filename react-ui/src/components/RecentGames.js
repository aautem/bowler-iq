import React from 'react';

import RecentScore from './RecentScore';

const RecentGames = (props) => {
  console.log('RecentGames Props:', props);

  // var topRow = null;
  // var bottomRow = null;

  // if (props.games.length > 0) {
  //   if (props.games.length > 3) {
  //     // add first three to top row
  //     topRow = props.games.slice(0, 3).map((game) => {
  //       return (
  //         <RecentScore
  //           key={game._id}
  //           date={game.date}
  //           score={game.score}
  //           loadGame={props.loadGame}
  //           changePage={props.changePage}
  //         />
  //       );
  //     });
  //   } else {
  //     // add all to topRow
  //     topRow = props.games.map((game) => {
  //       return (
  //         <RecentScore
  //           key={game._id}
  //           date={game.date}
  //           score={game.score}
  //           loadGame={props.loadGame}
  //           changePage={props.changePage}
  //         />
  //       );
  //     });
  //   }
  // }

  // if (props.games.length > 3) {
  //   if (props.games.length < 6) {
  //     // add all the rest to bottom row
  //     bottomRow = props.games.slice(3).map((game) => {
  //       return (
  //         <RecentScore
  //           key={game._id}
  //           date={game.date}
  //           score={game.score}
  //           loadGame={props.loadGame}
  //           changePage={props.changePage}
  //         />
  //       );
  //     });
  //   } else {
  //     // add through index 5 to bottom row
  //     bottomRow = props.games.slice(3, 6).map((game) => {
  //       return (
  //         <RecentScore
  //           key={game._id}
  //           date={game.date}
  //           score={game.score}
  //           loadGame={props.loadGame}
  //           changePage={props.changePage}
  //         />
  //       );
  //     });
  //   }
  // }

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

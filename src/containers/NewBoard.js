import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {newGame} from './../actions/gameActions';
import {bowlFirstBall} from './../actions/gameActions';

import NewFrame from './../components/NewFrame';
import NewTenth from './../components/NewTenth';

import './../styles/index.css';

// let scoreGame = function() {
//   // loop through each frame and score it (adding score to frame)
//   game.frames.forEach((frame, index) => {
//     // UPDATE SCORE ON STATE
//   });
// };

// let bowlSecond = function(frame, score) {
//   console.log('Current Scoresheet:', game);
//   // activate first ball, next frame
//   // recalculate each frame in scoresheet
// };

// RENDER INTO DIV ROW
class NewBoard extends Component {
  componentWillMount() {
    this.props.newGame();
  }

  render() {
    console.log('NewBoard Props:', this.props);
    return (
      <div className="col-12 board">

        <div className="row">
          <div className="col-1"></div>
          {this.props.game.frames.slice(0, 5).map((frame) => {
            return (
              <NewFrame
                key={frame.frame}
                scorecard={this.props.game.frames}
                frame={frame}
                bowlFirstBall={this.props.bowlFirstBall}
                bowlSecond={'bowlSecond'}
              />
            );
          })}
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          {this.props.game.frames.slice(5, 9).map((frame) => {
            return (
              <NewFrame
                key={frame.frame}
                scorecard={this.props.game.frames}
                frame={frame}
                bowlFirstBall={this.props.bowlFirstBall}
                bowlSecond={'bowlSecond'}
              />
            );
          })}
          <NewTenth
            frame={this.props.game.frames[9]}
            bowlFirstBall={this.props.bowlFirstBall}
            bowlSecond={'bowlSecond'}
            bowlThird={'bowlThird'}
          />
          <div className="col-1"></div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    newGame: newGame,
    bowlFirstBall: bowlFirstBall
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBoard);

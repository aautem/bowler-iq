import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {newGame} from './../actions/gameActions';
import {addDate} from './../actions/gameActions';
import {bowlFirstBall} from './../actions/gameActions';
import {bowlSecondBall} from './../actions/gameActions';
import {bowlTenthFrame} from './../actions/gameActions';

import NewBoard from './../components/NewBoard';
import NewGameGraph from './../components/NewGameGraph';

class BowlGame extends Component {
  componentWillMount() {
    this.props.newGame();
  }

  calculateAverageFrame() {
    // loop through frames adding up frame scores
    // divide total score by number of frames calculated
    let frames = 0;
    let totalScore = 0;

    this.props.game.frames.forEach((frame) => {
      // if frame has frame score
        // add frame
        // add framescore to total
      if (frame.frameScore) {
        frames ++;
        totalScore += frame.frameScore;
        console.log('Frames:', frames, 'Score:', totalScore);
      }
    });

    return frames === 0 ? 0 : ((totalScore / frames).toFixed(1));
  }

  render() {
    console.log('BowlGame Props:', this.props);
    return (
      <div className="row">

        <div className="row nav">
          <div className="col-4">
            BowlerIQ
          </div>
          <div className="col-4">
            Alex Autem
          </div>
          <div className="col-4">
            <button onClick={() => {console.log('Signing Out.')}}>
              Sign Out
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12 date">
            <input
              id="game-date"
              type="date"
              onChange={(e) => {this.props.addDate(e.target.value)}}>
            </input>
          </div>
        </div>

        <div className="row">
          <NewBoard
            game={this.props.game}
            bowlFirstBall={this.props.bowlFirstBall}
            bowlSecondBall={this.props.bowlSecondBall}
            bowlTenthFrame={this.props.bowlTenthFrame}
          />
        </div>

        <div className="row">
          <div className="col-1"></div>

          <div className="col-4 stats">
            <p>Score: {this.props.game.score}</p>
            <p>Strikes: {this.props.game.strikes}</p>
            <p>Spares: {this.props.game.spares}</p>
            <p>Splits: {this.props.game.splits}</p>
            <p>Points/Frame: {this.calculateAverageFrame()}</p>
          </div>

          <NewGameGraph scorecard={this.props.game.frames} />

          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-6">
            <button
              className="back-button"
              onClick={() => {console.log('Returning Home.')}}
            >
              Back to Home
            </button>
          </div>

          <div className="col-6 submit-button">
            <button
              className="submit-button"
              onClick={() => {console.log('Submitting Game.')}}
            >
              Submit Game
            </button>
          </div>
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
    addDate: addDate,
    bowlFirstBall: bowlFirstBall,
    bowlSecondBall: bowlSecondBall,
    bowlTenthFrame: bowlTenthFrame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BowlGame);

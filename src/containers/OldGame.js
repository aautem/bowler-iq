import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {loadGame} from './../actions/gameActions';

import OldBoard from './../components/OldBoard';
import NewGameGraph from './../components/NewGameGraph';

class OldGame extends Component {
  componentWillMount() {
    this.props.loadGame();
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
    console.log('OldGame Props:', this.props);
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
            {this.props.game.date}
          </div>
        </div>

        <div className="row">
          <OldBoard game={this.props.game} />
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
          <div className="col-12 buttons">
            <button
              onClick={() => {console.log('Returning Home.')}}
            >
              Back to Home
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
    loadGame: loadGame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OldGame);

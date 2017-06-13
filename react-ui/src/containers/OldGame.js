import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {loadGame} from './../actions/gameActions';

import OldBoard from './../components/OldBoard';
import GameStats from './../components/GameStats';
import NewGameGraph from './../components/NewGameGraph';

class OldGame extends Component {
  componentDidMount() {
    // remove 'active' class from either option in navbar
    document.getElementsByClassName('nav-item')[0].classList.remove('active');
    document.getElementsByClassName('nav-item')[1].classList.remove('active');
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
      <div className="section grey lighten-2">

        <div className="container grey darken-1 z-depth-5">
          <div className="row">

            <div className="col s12 date">
              <h5 className="center-align">{this.props.game.date}</h5>
            </div>
          </div>

          <OldBoard game={this.props.game} />
        </div>

        <div className="container">
          <div className="row">

            <div className="col s12 m5">
              <GameStats
                score={this.props.game.score}
                strikes={this.props.game.strikes}
                spares={this.props.game.spares}
                pins={this.props.game.totalPins}
                average={this.props.game.averageFrame}
              />
            </div>
            <div className="col s12 m7">
              <NewGameGraph scorecard={this.props.game.frames} />
            </div>

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

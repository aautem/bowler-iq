import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {newGame} from './../actions/gameActions';
import {addDate} from './../actions/gameActions';
import {bowlFirstBall} from './../actions/gameActions';
import {bowlSecondBall} from './../actions/gameActions';
import {bowlTenthFrame} from './../actions/gameActions';

import NewBoard from './../components/NewBoard';
import GameStats from './../components/GameStats';
import NewGameGraph from './../components/NewGameGraph';

class BowlGame extends Component {
  componentDidMount() {
    this.props.newGame();
    // remove 'active' class from stats option in navbar
    document.getElementsByClassName('nav-item')[0].classList.remove('active');
    // add 'active' class to bowl option in navbar
    document.getElementsByClassName('nav-item')[1].classList.add('active');
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
      <div className="section grey lighten-2">

        <div className="container grey darken-1 z-depth-5">
          <div className="row">

            <div className="col s12 m6 date">
              <input
                id="game-date"
                type="date"
                onChange={(e) => {this.props.addDate(e.target.value)}}
              >
              </input>
            </div>

            <div className="col s12 m6">
              <a
                className="waves-effect waves-light btn blue darken-4 submit"
                onClick={() => {console.log('Submit Game.')}}
              >
                Submit
              </a>
            </div>
          </div>

          <NewBoard
            game={this.props.game}
            bowlFirstBall={this.props.bowlFirstBall}
            bowlSecondBall={this.props.bowlSecondBall}
            bowlTenthFrame={this.props.bowlTenthFrame}
          />
        </div>

        <div className="container">
          <div className="row">

            <div className="col s12 m5">
              <GameStats
                score={this.props.game.score}
                strikes={this.props.game.strikes}
                spares={this.props.game.spares}
                splits={this.props.game.splits}
                average={this.calculateAverageFrame()}
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
    newGame: newGame,
    addDate: addDate,
    bowlFirstBall: bowlFirstBall,
    bowlSecondBall: bowlSecondBall,
    bowlTenthFrame: bowlTenthFrame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BowlGame);

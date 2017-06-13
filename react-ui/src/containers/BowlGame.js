import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addDate} from './../actions/gameActions';
import {bowlFirstBall} from './../actions/gameActions';
import {bowlSecondBall} from './../actions/gameActions';
import {bowlTenthFrame} from './../actions/gameActions';
import {saveGame} from './../actions/gameActions';
import {updateUserStats} from './../actions/userActions';

import NewBoard from './../components/NewBoard';
import GameStats from './../components/GameStats';
import NewGameGraph from './../components/NewGameGraph';

class BowlGame extends Component {
  componentDidMount() {
    // remove 'active' class from stats option in navbar
    document.getElementsByClassName('nav-item')[0].classList.remove('active');
    // add 'active' class to bowl option in navbar
    document.getElementsByClassName('nav-item')[1].classList.add('active');
  }

  validateSubmission() {
    // check game object is complete
    // has date, has 10th frame with at least 2 balls rolled
    if (this.props.game.date !== null) {
      if (this.props.game.frames[9].ball1.score !== null && this.props.game.frames[9].ball2.score !== null) {
        if (this.props.game.frames[9].ball1.score + this.props.game.frames[9].ball2.score >= 10) {
          if (this.props.game.frames[9].ball3.score !== null) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  addAverageFrame(game) {
    console.log('Adding average frame.');
    game.averageFrame = game.score / 10;
  }

  addClosePercent(game) {
    console.log('Adding open and closed frames.');
    game.closePercent = (game.closedFrames / 10).toFixed(3);
  }

  submitGame() {
    console.log('Game submitted.');
    var game = Object.assign({}, this.props.game);
    this.addAverageFrame(game);
    this.addClosePercent(game);
    console.log('Game to Save:', game);
    this.props.saveGame(game);
    this.props.updateUserStats(this.props.user, game);
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
                onClick={() => {
                  if (this.validateSubmission()) {
                    this.submitGame();
                  } else {
                    alert('Please finish your game or select a date before saving.');
                  }
                }}
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
                closedFrames={this.props.game.closedFrames}
                totalPins={this.props.game.totalPins}
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
    game: state.game,
    user: state.user
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addDate: addDate,
    bowlFirstBall: bowlFirstBall,
    bowlSecondBall: bowlSecondBall,
    bowlTenthFrame: bowlTenthFrame,
    saveGame: saveGame,
    updateUserStats: updateUserStats
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BowlGame);

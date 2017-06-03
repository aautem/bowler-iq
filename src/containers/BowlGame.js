import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {newGame} from './../actions/gameActions';
import {bowlFirstBall} from './../actions/gameActions';
import {bowlSecondBall} from './../actions/gameActions';
import {bowlTenthFrame} from './../actions/gameActions';

import NewBoard from './../components/NewBoard';

class BowlGame extends Component {
  componentWillMount() {
    this.props.newGame();
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
          <NewBoard
            game={this.props.game}
            bowlFirstBall={this.props.bowlFirstBall}
            bowlSecondBall={this.props.bowlSecondBall}
            bowlTenthFrame={this.props.bowlTenthFrame}
          />
        </div>

        <div className="row">
          <div className="col-1"></div>

          <div className="col-3 scoreboard">
            TOTAL <span>162</span>
          </div>

          <div className="col-1"></div>

          <div className="col-6 graph">
            GRAPH
          </div>

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
    bowlFirstBall: bowlFirstBall,
    bowlSecondBall: bowlSecondBall,
    bowlTenthFrame: bowlTenthFrame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BowlGame);

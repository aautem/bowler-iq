import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadGame} from './actions/gameActions';

import OldFrame from './OldFrame';
import OldTenth from './OldTenth';

import './index.css';

// RENDER INTO DIV ROW
class OldBoard extends Component {
  componentDidMount() {
    console.log('OldBoard Props:', this.props);

    // ENABLE BALL 1 FOR NEWGAME DEMO
    document.getElementById('one-1').disabled = false;

    // LOAD GAME FOR OLDGAME DEMO
    this.props.loadGame();
  }

  render() {
    return (
      <div className="col-12 board">
        <div className="row">
          <div className="col-1"></div>
            {this.props.game.frames.slice(0, 5).map((frame, index) => {
              return (
                <OldFrame key={index} frame={frame} />
              );
            })}
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
            {this.props.game.frames.slice(5, 9).map((frame, index) => {
              return (
                <OldFrame key={index} frame={frame} />
              );
            })}
          <OldTenth frame={this.props.game.frames[9]} />
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
  return bindActionCreators({loadGame: loadGame}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OldBoard);

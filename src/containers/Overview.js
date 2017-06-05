import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {loadGame} from './../actions/gameActions';

class Overview extends Component {
  componentDidMount() {
    // remove 'active' class from bowl option in navbar
    document.getElementsByClassName('nav-item')[1].classList.remove('active');
    // add 'active' class to stats option in navbar
    document.getElementsByClassName('nav-item')[0].classList.add('active');
  }

  render() {
    console.log('Overview Props:', this.props);

    return (
      <div className="section grey lighten-2">

        <div className="container">
          <div className="row">

            <div className="col s12 m6">
              <div className="grey darken-1 z-depth-5 stat-block">
                <h4>Recent Games</h4>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="grey darken-1 z-depth-5 stat-block">
                <h4>Achievements</h4>
              </div>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col s12 m7">
              <div className="blue darken-4 z-depth-5 stat-block">
                <h4>Recent Trends</h4>
              </div>
            </div>

            <div className="col s12 m5">
              <div className="blue darken-4 z-depth-5 stat-block">
                <h4>Statistics</h4>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

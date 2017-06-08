import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {loadGame} from './../actions/gameActions';

import RecentGames from './../components/RecentGames';
import Achievements from './../components/Achievements';
import RecentTrends from './../components/RecentTrends';
import Statistics from './../components/Statistics';

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

            <RecentGames />

            <Achievements />

          </div>
        </div>

        <div className="container">
          <div className="row">

            <RecentTrends />

            <Statistics />

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

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {loadGame} from './../actions/gameActions';
import {changePage} from './../actions/pageActions';

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

            <RecentGames
              games={this.props.gameHistory}
              loadGame={this.props.loadGame}
            />

            <Achievements badges={this.props.user.badges} />

          </div>
        </div>

        <div className="container">
          <div className="row">

            <Statistics stats={this.props.user.stats} />

            <RecentTrends games={this.props.gameHistory} />

          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    gameHistory: state.gameHistory
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadGame: loadGame,
    changePage: changePage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

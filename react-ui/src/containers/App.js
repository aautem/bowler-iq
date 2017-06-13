import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getUser} from './../actions/userActions';
import {loadGames} from './../actions/gameHistoryActions';
import {changePage} from './../actions/pageActions';
import {newGame} from './../actions/gameActions';
import {loadGame} from './../actions/gameActions';

import Nav from './../components/Nav';
import Overview from './Overview';
import BowlGame from './BowlGame';
import OldGame from './OldGame';
import GameHistory from './../components/GameHistory';
import Loading from './../components/Loading';
import Footer from './../components/Footer';

import './../styles/index.css';

class App extends Component {
  componentWillMount() {
    // Heroku deployment
    this.props.getUser('593e053407767c001168ca55');
    this.props.loadGames('593e053407767c001168ca55');

    // Local development
    // this.props.getUser('593e1e934b733b02bbca3198');
    // this.props.loadGames('593e1e934b733b02bbca3198');
  }

  componentDidMount() {
    console.log('App Props:', this.props);
  }

  render() {
    return (
      <div>
        <Nav
          user={this.props.user}
          changePage={this.props.changePage}
          newGame={this.props.newGame}
        />

        {this.props.page.view === 'home' &&
        <Overview />}

        {this.props.page.view === 'bowl' &&
        <BowlGame />}

        {this.props.page.view === 'game' &&
        <OldGame />}

        {this.props.page.view === 'history' &&
        <GameHistory
          gameHistory={this.props.gameHistory}
          loadGame={this.props.loadGame}
        />}

        {this.props.page.view === 'loading' &&
        <Loading />}

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
    user: state.user,
    gameHistory: state.gameHistory
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUser: getUser,
    loadGames: loadGames,
    changePage: changePage,
    newGame: newGame,
    loadGame: loadGame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

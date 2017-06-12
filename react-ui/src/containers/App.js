import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getUser} from './../actions/userActions';
import {loadGames} from './../actions/gameHistoryActions';
import {changePage} from './../actions/pageActions';

import Nav from './../components/Nav';
import Overview from './Overview';
import BowlGame from './BowlGame';
import OldGame from './OldGame';
import Loading from './../components/Loading';
import Footer from './../components/Footer';

import './../styles/index.css';

class App extends Component {
  componentWillMount() {
    this.props.getUser('593e1e934b733b02bbca3198');
    this.props.loadGames('593e1e934b733b02bbca3198');
  }

  componentDidMount() {
    console.log('App Props:', this.props);
  }

  render() {
    return (
      <div>
        <Nav
          name={this.props.user.name}
          changePage={this.props.changePage}
        />
        {this.props.page.view === 'home' && <Overview />}
        {this.props.page.view === 'bowl' && <BowlGame />}
        {this.props.page.view === 'game' && <OldGame />}
        {this.props.page.view === 'loading' && <Loading />}
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
    changePage: changePage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
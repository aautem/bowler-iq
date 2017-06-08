import React, { Component } from 'react';
import {connect} from 'react-redux';

import Nav from './Nav';
import Overview from './Overview';
import BowlGame from './BowlGame';
import OldGame from './OldGame';
import Footer from './../components/Footer';

import './../styles/index.css';

class App extends Component {
  componentDidMount() {
    console.log('App Props:', this.props);
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.page.view === 'home' && <Overview />}
        {this.props.page.view === 'bowl' && <BowlGame />}
        {this.props.page.view === 'game' && <OldGame />}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  };
};

export default connect(mapStateToProps)(App);

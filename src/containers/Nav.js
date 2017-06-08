import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changePage} from './../actions/pageActions';

class Nav extends Component {
  componentDidMount() {
    console.log('Nav Props:', this.props);
  }

  render() {
    return (
      <nav className="blue darken-4">
        <div className="nav-wrapper container">
          <a
            id="logo-container"
            className="brand-logo"
            onClick={() => {this.props.changePage('home')}}
          >
            Bowler<span>IQ</span>
          </a>

          <ul className="right hide-on-med-and-down">
            <li><h2 id="bowler-name">{this.props.name}</h2></li>
            <li className="nav-item active">
              <a onClick={() => {this.props.changePage('home')}}>Statistics</a>
            </li>
            <li className="nav-item">
              <a onClick={() => {this.props.changePage('bowl')}}>Bowl Now</a>
            </li>
            <li>
              <a onClick={() => {console.log('Logging Out.')}}>Log Out</a>
            </li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a onClick={() => {this.props.changePage('home')}}>Statistics</a></li>
            <li><a onClick={() => {this.props.changePage('bowl')}}>Bowl Now</a></li>
            <li><a onClick={() => {console.log('Logging Out.')}}>Log Out</a></li>
          </ul>

          <a data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changePage: changePage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

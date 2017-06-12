import React from 'react';

const Nav = (props) => {
  console.log('Nav Props:', props);
  return (
    <nav className="blue darken-4">
      <div className="nav-wrapper container">
        <a
          id="logo-container"
          className="brand-logo"
          onClick={() => {props.changePage('home')}}
        >
          Bowler<span>IQ</span>
        </a>

        <ul className="right hide-on-med-and-down">
          <li><h2 id="bowler-name">{props.user.name}</h2></li>
          <li className="nav-item active">
            <a onClick={() => {props.changePage('home')}}>Statistics</a>
          </li>
          <li className="nav-item">
            <a onClick={() => {
              props.newGame(props.user._id);
              props.changePage('bowl');
            }}>Bowl Now</a>
          </li>
          <li>
            <a onClick={() => {alert('Logging out has been disabled in the demo app.')}}>Log Out</a>
          </li>
        </ul>

        <ul id="nav-mobile" className="side-nav">
          <li><a onClick={() => {props.changePage('home')}}>Statistics</a></li>
          <li><a onClick={() => {
            props.newGame(props.user._id);
            props.changePage('bowl');
          }}>Bowl Now</a></li>
          <li><a onClick={() => {alert('Logging out has been disabled in the demo app.')}}>Log Out</a></li>
        </ul>

        <a data-activates="nav-mobile" className="button-collapse">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;

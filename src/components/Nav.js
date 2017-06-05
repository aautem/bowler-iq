import React from 'react';

const Nav = (props) => {
  return (
    <nav className="blue darken-4">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo">Bowler<span>IQ</span></a>

        <ul className="right hide-on-med-and-down">
          <li><h2 id="bowler-name">Alex Autem</h2></li>
          <li className="nav-item active"><a href="#">Statistics</a></li>
          <li className="nav-item"><a href="#">Bowl Now</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>

        <ul id="nav-mobile" className="side-nav">
          <li><a href="#">Career Stats</a></li>
          <li><a href="#">Bowl Now</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>

        <a href="#" data-activates="nav-mobile" className="button-collapse">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;

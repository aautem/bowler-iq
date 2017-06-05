import React from 'react';

import Nav from './Nav';
import Overview from './../containers/Overview';
import BowlGame from './../containers/BowlGame';
import OldGame from './../containers/OldGame';
import Footer from './Footer';

import './../styles/index.css';

const App = (props) => {
  return (
    <div>

      <Nav />

      <Overview />

      <Footer />

    </div>
  );
};

export default App;

// <BowlGame />
// <OldGame />

import React from 'react';

import Nav from './Nav';
import BowlGame from './../containers/BowlGame';
import OldGame from './../containers/OldGame';
import Footer from './Footer';

import './../styles/index.css';

const App = (props) => {
  return (
    <div>

      <Nav />

      <BowlGame />

      <Footer />

    </div>
  );
};

export default App;

// <OldGame />

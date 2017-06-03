import React from 'react';

import BowlGame from './../containers/BowlGame';
// import NewBoard from './../containers/NewBoard';
// import OldBoard from './../containers/OldBoard';

import './../styles/index.css';

const App = (props) => {
  console.log('App Props:', props);
  return (
    <div>
      <div className="row">
        <BowlGame />
      </div>
    </div>
  );
};

export default App;

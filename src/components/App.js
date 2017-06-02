import React from 'react';

import NewBoard from './../containers/NewBoard';
// import OldBoard from './../containers/OldBoard';

import './../styles/index.css';

const App = (props) => {
  console.log('App Props:', props);
  return (
    <div>
      <div className="row">
        <NewBoard />
      </div>
    </div>
  );
};

export default App;

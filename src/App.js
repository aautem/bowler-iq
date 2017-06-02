import React from 'react';

import NewBoard from './NewBoard';
import OldBoard from './OldBoard';

import './index.css';

const App = (props) => {
  console.log('App Props:', props);
  return (
    <div>
      <div className="row">
        <NewBoard />
      </div>

      <div className="row">
        <OldBoard />
      </div>
    </div>
  );
};

export default App;

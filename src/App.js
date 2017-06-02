import React from 'react';

import OldBoard from './OldBoard';

import './index.css';

const App = (props) => {
  console.log('App Props:', props);
  return (
    <div className="row">
      <OldBoard />
    </div>
  );
};

export default App;

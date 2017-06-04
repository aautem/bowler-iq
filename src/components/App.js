import React from 'react';

import BowlGame from './../containers/BowlGame';
import OldGame from './../containers/OldGame';

import './../styles/index.css';

const App = (props) => {
  return (
    <div>
      <div className="row">
        <OldGame />
      </div>
    </div>
  );
};

export default App;

  // return (
  //   <div>
  //     <div className="row">
  //       <BowlGame />
  //     </div>
  //   </div>
  // );

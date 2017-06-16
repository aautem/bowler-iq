import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './../components/Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const user = {
    _id: '12345',
    name: 'Alex Autem'
  };

  ReactDOM.render(
    <Nav
      user={user}
    />, div);
});

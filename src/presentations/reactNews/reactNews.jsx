import React from 'react';
import { React16 } from './react16';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export const ReactNews = (props) => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={React16}/>
      </div>
    </Router>
  );
};

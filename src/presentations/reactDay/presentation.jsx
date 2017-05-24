import React, { Component } from 'react';
import { Intro } from './intro';
import { ReactNative } from './reactNative';
import { ReactRouter } from './reactRouter';
import { ServerSideRendering } from './serverSideRendering';
import { StateManagement } from './stateManagement';
import { StyledComponents } from './styledComponents';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class Presentation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Intro}/>
          <Route path="/react-native" component={ReactNative}/>
          <Route path="/react-router" component={ReactRouter}/>
          <Route path="/server-side-rendering" component={ServerSideRendering}/>
          <Route path="/state-management" component={StateManagement}/>
          <Route path="/styled-components" component={StyledComponents}/>
        </div>
     </Router>
    );
  }
}

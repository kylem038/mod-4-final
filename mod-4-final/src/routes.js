import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Grudge from './components/Grudge';
import List from './components/List';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/all-grudges" component={List}>
      <Route path='/all-grudges/:name' component={Grudge} />
    </Route>
  </Router>
);

export default Routes;

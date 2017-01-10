import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Grudge from './components/Grudge';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/grudge/:id" component={Grudge} />
  </Router>
);

export default Routes;

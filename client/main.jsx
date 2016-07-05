import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../imports/ui/App.jsx';
import Routes from 'react-router';
import Dashboard from '../imports/ui/Dashboard.jsx';
import Email from '../imports/ui/Email.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
    </Route>
    <Route path="/email" component={Email}>
    </Route>
  </Router>
);



Meteor.startup(() => {
  render(routes, document.getElementById('render-target'));
});

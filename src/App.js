import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {pageValidate} from './pages/Validate';
import { pageConfirm} from '../src/pages/Confirm';

function App() {
  return (
    <Router>
      <Switch>
        <Router path="/"></Router>
        <Route path="/validate">
          <pageValidate />
        </Route>
        <Route path="/">
          <pageConfirm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

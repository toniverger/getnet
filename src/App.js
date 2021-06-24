import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Confirm } from "./pages/Confirm";
import { Validate } from "./pages/Validate";

function App() {
  return (
    <div>
      <pageValidate></pageValidate>
      <Router>
        <Switch>
         <Route path="/validate" component={Validate} />
          <Route path="/" component={Confirm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

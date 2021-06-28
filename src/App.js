import React from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import Confirm from "./pages/Confirm";   
import { Datas } from "./pages/Datas";
import { Validate } from "./pages/Validate";

function App() {
  return (
    <div>
      <pageValidate></pageValidate>
      <Router>
        <Switch>
          <Route path="confirm" component={Confirm} />
         <Route path="/validate" component={Validate} />
          <Route path="/" component={Datas} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

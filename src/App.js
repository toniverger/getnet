import React from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import { Datas } from "./pages/Datas";
import { Validate } from "./pages/Validate";

function App() {
  return (
    <div>
      <Router>
        <Switch>
         
         <Route path="/validate" component={Validate} />
          <Route path="/" component={Datas} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

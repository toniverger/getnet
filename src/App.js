import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Adress from "./pages/Adress";
import Confirm from "./pages/Confirm";
import { Datas } from "./pages/Datas";
import { Index } from "./pages/Index"
import Documentation from "./pages/Documentation";
import Review from "./pages/Review";
import { Validate } from "./pages/Validate";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/review" component={Review} />
          <Route path="/docs" component={Documentation} />
          <Route path="/adress" component={Adress} />
          <Route path="/validate" component={Validate} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/clientes" component={Datas} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

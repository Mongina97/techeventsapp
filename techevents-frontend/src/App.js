import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventPlaces from "./pages/places";
import NavLinks from "./UIElements/NavLink";

const App = () => {
  return (
    <Router>
      <NavLinks />
      <main>
        <Switch>
          <Route path="/" exact>
            <EventPlaces />
          </Route>
          {/* <Route path="/places/new" exact>
            <NewPlace />
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
};

export default App;

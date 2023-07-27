import GlobalStyles from "./components/GlobalStyles";
import { Route, Switch, Redirect } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route exact path={["/peepo/:id", "/"]} component={Home} />
        <Redirect to="/peepo/not-found" />
      </Switch>
      <footer>
        <small>Copyright © 2022 zschuah. All Rights Reserved.</small>
      </footer>
    </div>
  );
}

export default App;

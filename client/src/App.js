import "./App.css";
import Signup from "./Page/Signup";
import Signin from "./Page/Signin";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute />
      </Switch>
    </div>
  );
}

export default App;

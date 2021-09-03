import "./App.css";

import Signup from "./Views/Auth/Signup";
import Signin from "./Views/Auth/Signin";
import Profile from "./Views/Profile/Profile";
import PrivateRoute from "./router/PrivateRoute";

import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

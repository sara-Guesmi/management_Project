import "./App.css";

import Signup from "./Views/Auth/Signup";
import Signin from "./Views/Auth/Signin";
import Profile from "./Views/Profile/Profile";
import PrivateRoute from "./router/PrivateRoute";

import Navbar from "./Components/Navbar.js/Navbar";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Views/NotFound/NotFound";
import Dashbord from "./Views/Dashbord/Dashbord";

import { useEffect } from "react";
import { currentUser } from "./Redux/actions/user";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import ListDemande from "./Views/ListDemande/ListDemande";
import AddProfile from "./Views/Profile/AddProfile";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
  }, [dispatch, token]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/profile/:id_chef" component={Profile} />
        <PrivateRoute path="/addProfile" component={AddProfile} />
        <PrivateRoute path="/dashbord" component={Dashbord} />
        <PrivateRoute path="/listDemande" component={ListDemande} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

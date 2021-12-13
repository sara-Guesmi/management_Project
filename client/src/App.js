import "./App.css";

import Signup from "./Views/Auth/Signup";
import Signin from "./Views/Auth/Signin";
import Profile from "./Views/Profile/Profile";
import ListDemande from "./Views/ListDemande/ListDemande";
import AddProfile from "./Views/Profile/AddProfile";
import NotFound from "./Views/NotFound/NotFound";
import Dashbord from "./Views/Dashbord/Dashbord";

import PrivateRoute from "./router/PrivateRoute";
import ChefRoute from "./router/ChefRoute";

import Navbar from "./Components/Navbar.js/Navbar";
// import Footer from "./Components/Footer/Footer";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { currentUser } from "./Redux/actions/user";
import LandPage from "./Views/LandPage/LandPage";
import Footer from "./Components/layout/Footer";

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
      {token && <Navbar />}
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/profile/:id_chef" component={Profile} />
        <ChefRoute path="/addProfile/:id_chef" component={AddProfile} />
        <PrivateRoute path="/dashbord" component={Dashbord} />
        <PrivateRoute path="/listDemande" component={ListDemande} />
        <Route path="/*" component={NotFound} />
      </Switch>
      {token && <Footer />}
    </div>
  );
}

export default App;

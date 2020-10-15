import React , {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login.js";
import { auth } from "./firebase";
import { connect } from "react-redux";
import {setUser} from './userActions'
function App({user,setUser}) {

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function mapStateToProps(state){
  return {
    user : state.userReducer
  }
}
const mapDispatchToProps = {
  setUser
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

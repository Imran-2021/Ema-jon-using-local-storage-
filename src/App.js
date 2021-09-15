import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Manage from './Components/Management/Manage';
import Nomatch from './Components/NoMatch/Nomatch';
import ReviewDetails from './Components/ReviewDetails/ReviewDetails';
function App() {
  return (
       <Router>
       <Header/>
        <Switch>
          <Route path="/shop">
          <Shop/>
          </Route> 
          <Route path="/review">
          <Review/>
          </Route> 
          <Route path="/management">
          <Manage/>
          </Route> 
          <Route  exact path="/">
          <Shop/>
          </Route> 
          <Route path="/product/:asdf">
          <ReviewDetails/>
          </Route> 
          <Route  path="*">
            <Nomatch/>
          </Route> 
        </Switch>
        </Router>
  );
}
export default App;

import React from 'react';
import Notfound from '../Components/page404';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginScreen from '../Components/AuthanticationComponents/LoginScreen';
import SignupScreen from '../Components/AuthanticationComponents/SignupScreen';
import Home  from '../Components/Home/home';


export default class Routing extends React.Component {
    render(){
      return(
        <Router>
          <Switch>
            <Route path="/" exact component={LoginScreen} />
            <Route path="/home" exact component={Home} />
            <Route path="/register" exact component={SignupScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      )
    }
}
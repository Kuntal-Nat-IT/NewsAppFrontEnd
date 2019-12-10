import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginScreen from '../Components/AuthanticationComponents/LoginScreen';
import SignupScreen from '../Components/AuthanticationComponents/SignupScreen';

export default class Routing extends React.Component {
    render(){
      return(
        // <Router>
        //     <Route path="/" exact component={LoginScreen} />
        // </Router>
        <LoginScreen/>
      )
    }
}
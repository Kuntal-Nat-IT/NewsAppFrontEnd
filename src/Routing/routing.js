import React from 'react';
import Notfound from '../Components/page404';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginScreen from '../Components/AuthanticationComponents/LoginScreen';
import SignupScreen from '../Components/AuthanticationComponents/SignupScreen';
import Home  from '../Components/Home/home';
import ForgetPassword from '../Components/resetpassword/forgetpassword';
import ResetPasswordOTP from '../Components/resetpassword/otppage';
import SetNewPassword from '../Components/resetpassword/setnewpassword';


export default class Routing extends React.Component {
    render(){
      return(
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={SignupScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/resetpassword" component={ForgetPassword} />
            <Route path="/reset/password/otp" component={ResetPasswordOTP} />
            <Route path="/setnewpassword" component={SetNewPassword} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      )
    }
}
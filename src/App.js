import React, { Component } from 'react';
import './App.css';
import Page404 from './components/NotFound/404page';
import SignUp from './components/Login/SignUp';
import Login from './components/Login/login';
import Home from './components/HomePage/home';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


class App extends Component{
  render() {
    return (
      <div>
          
        {/* Creating Router */}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route component={Page404} />
            </Switch>
          </div>
        </Router>


      </div>
    );
  }
}

export default App;

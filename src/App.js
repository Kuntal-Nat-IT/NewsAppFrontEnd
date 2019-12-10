import React, { Component } from 'react';
import './App.css';
import Page404 from './components/NotFound/404page';
import SignUp from './components/Login/SignUp';
import Login from './components/Login/login';
import Home from './components/HomePage/home';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

// function App() {
//   return (
//     <div>
//         <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

import Routing from './Routing/routing'

export default class App extends React.Component {
  render(){
    return(
      <Routing />
    )
  }
}

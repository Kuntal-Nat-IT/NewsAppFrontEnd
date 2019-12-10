import React from 'react';
import './App.css';

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
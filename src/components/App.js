// import React, {Component, useState} from "react";
// import '../styles/App.css';

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}
//             </div>
//         )
//     }
// }

import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link,useLocation } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                      </li>
                  </ul>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                      </li>
                  </ul>
            </nav>
            <h2>You are home</h2>
      </div>
    )
}

const About = () => {
    return (
      <div>
            <h2>You are on the about page</h2>
            <hr />
        </div>
    )
}
  
function Error() {
    return (
      <div>
        <h2>No match</h2>
      </div>
    )
}
  
function LocatonDisplay() {
    const location = useLocation();
  return (
          <h2 >{location.pathname}</h2>
  )
}

  
const App = () => {
    return (
        <Router>
            <div id="main">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/*"><Error /></Route>
                </Switch>
                <LocatonDisplay data-testid="location-display" />
            </div>
        </Router>
    );
}


export default App;

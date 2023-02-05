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
import Home from './Home';
import About from './About';
import Error from './Error';
import LocatonDisplay from "./LocatonDisplay";
const App = () => {
    return (
        <Router>
            <div id="main">
                <Switch>
                    <Route exact path="/"><Home /><LocatonDisplay /></Route>
                    <Route exact path="/about"><About /><LocatonDisplay /></Route>
                    <Route exact path="/*"><Error /><LocatonDisplay /></Route>
                </Switch>
            </div>
        </Router>
    );
}


export default App;

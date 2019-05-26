import React from 'react';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import ChallengesList from "./components/challenges/ChallengesList";
import Train from "./components/challenges/Train";
import { BrowserRouter as Router, Route } from "react-router-dom";


const App=()=> {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ChallengesList} />
        <Route exact path="/train" component={Train} />
      </div>
    </Router>
  );
}

export default App;

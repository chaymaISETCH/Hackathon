import React from 'react';
import './App.css';
import Avatar from 'react-avatar';
import NavBar from "./components/navBar/NavBar";
import ChallengesList from "./components/challenges/ChallengesList";
import Train from "./components/challenges/Train";
import WithAuth from "./HOCs/WithAuth"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slide from "./components/slide/Slide"
import jwt_decode from "jwt-decode"
import { setCurrentUser,authenticated } from "./redux/actions/actions"
import { connect } from "react-redux"
import Footer from "./components/footer/Footer"
import SignUpSignIn from "./components/sign/Modal"


const App=({setCurrentUser,isAuthenticated})=> {
  if(localStorage.token){
    setCurrentUser(jwt_decode(localStorage.token))
    isAuthenticated(true)
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Slide />
        <SignUpSignIn/>
        <Route exact path="/" component={WithAuth(ChallengesList)} />
        {/*<Header />*/}
        <Route exact path="/train" component={Train} />
        <Footer />
      </div>
    </Router>
  );
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user)),
  isAuthenticated : isAuthenticated => dispatch(authenticated(isAuthenticated))

})
export default connect(null,mapDispatchToProps)(App);

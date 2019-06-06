import React from 'react';
import './App.css';
import SideMenu from "./components/navBar/SideMenu"
import Avatar from 'react-avatar';
import NavBar from "./components/navBar/NavBar";
import ChallengesList from "./components/challenges/ChallengesList";
import Train from "./components/challenges/Train";
import WithAuth from "./HOCs/WithAuth"
import WithLoading from "./HOCs/WithLoading"
import AddChallenge from "./components/challenges/addChallenge/AddChallenge"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slide from "./components/slide/Slide"
import jwt_decode from "jwt-decode"
import { setCurrentUser,authenticated } from "./redux/actions/actions"
import { connect } from "react-redux"
import Footer from "./components/footer/Footer"
import SignUpSignIn from "./components/sign/Modal"


const App=({setCurrentUser,authenticated,isAuthenticated})=> {
  if(localStorage.token){
    setCurrentUser(jwt_decode(localStorage.token))
    authenticated(true)
  }
  return (
    <Router>
      <div className="App">
        
        <NavBar/>
        {isAuthenticated===false?<Slide />:null}
        <SignUpSignIn/>
        <div style={{display:"flex"}}>
        <SideMenu show={true}/>
        <Route exact path="/" component={WithLoading(ChallengesList)} />
        
        {/*<Header />*/}
        <Route exact path="/train" component={WithAuth(Train)} />
        
        <Route exact path="/addChallenge" component={WithAuth(AddChallenge)} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user)),
  authenticated : isAuthenticated => dispatch(authenticated(isAuthenticated))

})
const mapStateToProps = state =>({
  isAuthenticated : state.isAuthenticated
})
export default connect(mapStateToProps,mapDispatchToProps)(App);

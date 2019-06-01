import React from 'react';
import "./NavBar.css"
import { connect } from 'react-redux';  
import { toggleShow,changeActiveTab,authenticated } from "../../redux/actions/actions"
import { setCurrentUser } from "../../redux/actions/actions"
import DropDown from "./DropDown"
const NavBar = ({toggle,changeActiveTab,setCurrentUser,isAuthenticated,authenticated})=>{
  const logout = () => {
    console.log("logout nav bar")
    localStorage.removeItem('token');
    setCurrentUser({})
    authenticated(false)
  }
  return isAuthenticated===false?
  (
    <div className="nav-container">
      <ul>
        <li className="sweep-to-bottom nav-item" onClick={e => {toggle();changeActiveTab("2")}}>Sign In</li>
        <li className="sweep-to-bottom nav-item" onClick={e => {toggle();changeActiveTab("1")}}>Sign Up</li>
      </ul>       
    </div>
  ):(
    <div className="nav-container">
       <ul>
        <DropDown userName="chayma trabelsi" logout={logout}/>
      </ul>
    </div>
  )
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleShow()),
  changeActiveTab : tab => dispatch(changeActiveTab(tab)),
  setCurrentUser : user => dispatch(setCurrentUser(user)),
  authenticated : isAuthenticated => dispatch(authenticated(isAuthenticated))

})


export default connect(
  mapStateToProps, 
mapDispatchToProps
)(NavBar);

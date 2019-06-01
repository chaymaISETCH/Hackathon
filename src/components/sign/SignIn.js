import React from 'react';
import "./Sign.css"
import jwt_decode from "jwt-decode"
import { connect } from "react-redux"
import { setCurrentUser,authenticated } from "../../redux/actions/actions"
import { Form, FormGroup, Label,Button, Input, FormFeedback, FormText } from 'reactstrap';
import { toggleShow } from "../../redux/actions/actions"
class SignIn extends React.Component{
 
constructor(props){

    super(props)
    this.state={
        email :"",
        password :"",
        validEmail:false,
        validPassword:false
        
    }
}
handleEmailChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    //Find a non-whitespace character
    const regex = /^[a-zA-Z0-9]+\S+@\S+\.[A-Za-z]+$/
    console.log(e.target.value.match(regex))
    this.setState({validEmail:e.target.value.match(regex)?true:false})
    
}
handlePasswordChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    const regex = /\S{8,}/
    console.log(e.target.value.match(regex))
    this.setState({validPassword:e.target.value.match(regex)?true:false})
    
}
signIn = (e) => {
    console.log("signin")
    let url = "http://localhost:8888/api/users/login"
      fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        
        body: JSON.stringify({
            email : this.state.email,
            password : this.state.password
        })
      }).then((response)=> {
        return response.json();
      }).then((res)=> {
       console.log(res)
       console.log(jwt_decode(res.token))
       this.props.setCurrentUser(jwt_decode(res.token))
       this.props.authenticated(true)
       localStorage.setItem('token', res.token);
      }).catch(e=>
        console.log("error"+e)
      )
  
    
}
render(){
    return (
    <div>
      <Form>
        <FormGroup>
          <Input name="email" value={this.state.email} onChange={this.handleEmailChange} invalid={!this.state.validEmail} type="email" valid={this.state.validEmail} placeholder="Email" style={{marginTop : "20px"}}/>
          <FormFeedback >Invalid Email</FormFeedback>
        </FormGroup>
        <FormGroup>
          
          <Input name="password" value={this.state.password} onChange={this.handlePasswordChange} type="password" invalid={!this.state.validPassword} valid={this.state.validPassword} placeholder="password"/>
          <FormFeedback>Invalid Password</FormFeedback>
        </FormGroup>
       
      </Form>
        <hr />
        <div className="btn-container">
            <Button onClick={this.signIn} disabled={!(this.state.validEmail &&this.state.validPassword)} style={{backgroundColor: this.state.validEmail&&this.state.validPassword?"#feb800":"gray"}} className="sign-btn" color="primary">Submit</Button>
            <Button className="sign-btn" color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </div>
    </div>
    );
  }
}

{/*const mapStateToProps = state=>({
  show : state.user.show,
})*/}
const mapDisptachToProps=dispatch=>({
  setCurrentUser : user => dispatch(setCurrentUser(user)),
  toggle : () => dispatch(toggleShow()),
  authenticated : isAuthenticated => dispatch(authenticated(isAuthenticated))
})
export default connect(
  null,
  mapDisptachToProps)(SignIn);


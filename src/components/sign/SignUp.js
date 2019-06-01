import React from 'react';
import { Form, FormGroup, Label,Button,  Input, FormFeedback, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
       <FormGroup>
          {/*<Label for="exampleEmail">Input without validation</Label>*/}
          <Input placeholder="User Name" style={{marginTop:"20px"}} />
          <FormFeedback>Invalid User Name</FormFeedback>
        </FormGroup>
        <FormGroup>
          
          <Input valid placeholder="Email"/>
          <FormFeedback valid>Invalid Email</FormFeedback>
        </FormGroup>
        <FormGroup>
          
          <Input type="password" invalid placeholder="password"/>
          <FormFeedback>Invalid Password</FormFeedback>
        </FormGroup>
        <FormGroup>
          
          <Input type="password" invalid  placeholder="confirm password"/>
          <FormFeedback>password is not matching</FormFeedback>
        </FormGroup>
        <hr />
        <div className="btn-container">
            <Button className="sign-btn" color="primary">Submit</Button>
            <Button className="sign-btn" color="secondary">Cancel</Button>
        </div>
      </Form>
    );
  }
}
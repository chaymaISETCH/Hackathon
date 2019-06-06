import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Link } from "react-router-dom";
import { ReactComponent as Edit }from "./edit.svg"
import RemoveChallenge from "./Confirm"
import axios from "axios"
import { ReactComponent as Remove }from "./remove.svg"

class ChallengeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }
  delete = () =>{
    let url = "http://localhost:8888/api/challenges/deleteChallenge/"+this.props.challenge._id
    axios.delete(url)
    .then(res => this.props.delete(this.props.challenge._id))
    .catch(e=>console.log(e))

  }
  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="item">
        <div className="manage-challenge">
          <p>{this.props.challenge.title}</p>
          <span className="flex">
         
            <Link   to={{
              pathname: "/addChallenge",
              state :{
                edit :true,
                challenge : this.props.challenge
              }
            }}
            className="link">
              <Edit width="15" style={{color:"#2f2f2f"}} />Edit

            </Link>
           
            <RemoveChallenge delete={this.delete} />
          </span>
        </div>
        <p>Difficulty : {this.props.challenge.difficulty}</p>
        
        <Link
          to={{
            pathname: "/train",
            state: { challenge: this.props.challenge }
          }}
        >
          <Button color="primary" style={{ marginRight: '1rem' }}>Participate</Button>
        </Link>
        <Button color="primary" onClick={this.toggle}  >Details</Button>
        <Collapse isOpen={this.state.collapse} style={{marginTop: '1px'}}>
          <Card>
            <CardBody>
            {this.props.challenge.details}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default ChallengeListItem;
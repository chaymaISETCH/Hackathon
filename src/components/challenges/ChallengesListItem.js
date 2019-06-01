import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Link } from "react-router-dom";

class ChallengeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="item">
        <p>{this.props.challenge.title}</p>
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
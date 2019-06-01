import React from 'react';
import FilterBox from "./FilterBox";
import "./ChallengesList.css";
import { connect } from "react-redux";
import { getAllChallenges } from "../../redux/actions/actions";
import Item from "./ChallengesListItem";
class ChallengesList extends React.Component{

  getAllChallenges=()=>{
    let url = "http://localhost:8888/api/challenges/"
    fetch(url, {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    }).then((response)=> {
      return response.json();
    }).then((res)=> {
      this.props.getAllChallenges(res.challenges)
    }).catch(e=>
      console.log("error"+e)
    )  
  }

  componentDidMount(){
    this.getAllChallenges()
  }
  render(){
    return (
      <div className="challenge">
        <FilterBox />
        <div className="challenges-list">
            {this.props.challenges?this.props.challenges
              .filter(c=>c.title.toUpperCase().match(this.props.title.toUpperCase()))
              .map(challenge=><Item key={challenge._id} challenge={challenge} />):null
            }
        </div>
      </div>
    );
  }
}



const mapStateToProps = state=>({
  challenges : state.challenge.challenges,
  title : state.challenge.title||""
})
const mapDisptachToProps=dispatch=>({
  getAllChallenges : challenges=> dispatch(getAllChallenges(challenges))
})
export default connect(
  mapStateToProps,
  mapDisptachToProps)(ChallengesList);

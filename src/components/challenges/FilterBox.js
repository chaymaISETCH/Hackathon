import React from 'react';
import "./FilterBox.css";
import { connect } from "react-redux";
import { filterByTitle } from "../../redux/actions/actions"
import { Input } from 'reactstrap';

const FilterBox = ({ filterByTitle })=>{


  return (
    <div className="filter-box">
        <span> Search</span>
        <hr />
        <div className="filter-options"> 
            <Input type="text" placeholder="search" onChange={e=>{filterByTitle(e.target.value)}} />
            <Input type="select">
              <option>Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </Input>
            <Input type="select">
              <option>Tags</option>
              <option>Integers</option>
              <option>Arras</option>
              <option>Strings</option>
            </Input>
            <Input type="select">
              <option>Dates</option>
            </Input>
        </div>

    </div>
  );
}
const mapDispatchToProps = dispatch =>({
  filterByTitle : title =>  dispatch(filterByTitle(title))
})
export default connect(null, mapDispatchToProps)(FilterBox)

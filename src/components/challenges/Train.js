import React from 'react';
import Editor from "../editor/Editor";
import "./Train.css"
import { connect } from "react-redux";
import Tabs from "./Tabs";
const Train = ({location,result}) => {

  return (
    <div className="train-box">
        <Tabs challenge={location.state.challenge} result={result} />
        <Editor/>
    </div>
  );
}

const mapStateToProps = (state=> ({result : state.result}))

export default connect(mapStateToProps)(Train)
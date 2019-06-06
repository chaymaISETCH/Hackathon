import React from 'react';
import brace from 'brace';
import Timer from "../timer/Timer"
import { connect } from "react-redux";
import Tests from "./Tests"
import Language from "./Language"
import AceEditor from 'react-ace';
import { Button, Input } from 'reactstrap';
import 'brace/ext/language_tools';
import 'brace/mode/java';
import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';
import 'brace/theme/kuroir';
import 'brace/theme/twilight';
import 'brace/theme/xcode';
import 'brace/theme/textmate';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/terminal';
import { setResult } from "../../redux/actions/actions";

class Editor extends React.Component{

  constructor(props){
    super(props)
    this.state={
      code:"",
      theme:"monokai",
      result :""
    }
  }
  handleChangeCode=(newValue)=> {
    console.log('change',newValue);
    this.setState({code : newValue})
  }
  run=()=>{
   let url = "https://api.judge0.com//submissions?X-Auth-Token=7d2b2a76-2b46-46b8-a476-c46b3a463446"
      fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        
        body: JSON.stringify({
          "source_code": this.state.code,
          "language_id": "29",
          "number_of_runs": "1",
          "stdin": "Judge0",
          "expected_output": "hello, Judge0",
          "cpu_time_limit": "2",
          "cpu_extra_time": "0.5",
          "wall_time_limit": "5",
          "memory_limit": "128000",
          "stack_limit": "64000",
          "max_processes_and_or_threads": "30",
          "enable_per_process_and_thread_time_limit": false,
          "enable_per_process_and_thread_memory_limit": true,
          "max_file_size": "1024"
        })
      }).then((response)=> {
        return response.json();
      }).then((contact)=> {
       console.log(contact)

      let url2 = "https://api.judge0.com//submissions/"+contact.token+"?X-Auth-Token=7d2b2a76-2b46-46b8-a476-c46b3a463446"
       
   fetch(url2, {
     method: 'get',
     headers: {'Content-Type': 'application/json'},
   
   }).then((response)=> {
     return response.json();
   }).then((result)=> {
    console.log(result)   
    this.props.setResult(result.stdout) 
   }).catch(e=>
     console.log("error"+e)
   )
    }).catch(e=>
      console.log("error"+e)
    )
  
  }
theme = ["monokai", "github", "tomorrow", "kuroir", "twilight", "xcode", "textmate", "solarized_dark", "solarized_light", "terminal"]
 render(){
  return (
    <div style={{flex : 3}}>
      <Timer />
      <Language languagesList={["JavaScript","Java","PHP","C","C++","Ruby","Python","Swift","C#","GO"]} />
      <Input type="select" className="choose-language" onChange={e=>this.setState({theme : e.target.value})}>
          <option value="monokai">Choose Theme :</option>
          {this.theme.map(l=><option key={l} value={l}>{l}</option>)}
      </Input>
      <AceEditor
      placeholder="GO !!"
      mode="javascript"
      theme={this.state.theme}
      name="blah2"
      onChange={this.handleChangeCode}
      fontSize={16}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={this.state.code}
      style={{flex : 3,width:"unset",height:"300px"}}
      setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2,
      
      }}/>    
      <Tests       theme={this.state.theme}
 tests="//Tests
var assert = require('assert');
assert.equal(add(5,2), 7); //OK
assert.equal(add(50,10), 70); //OK
assert.equal(add(9,3), 70);"/>
      <Button onClick={this.run} className="btn">Run Code</Button>  
      <Button onClick={this.run} className="btn">Run Tests</Button>  
      <Button onClick={()=>this.setState({code:""})} className="btn">Clear Editor</Button>  

    </div>
  );
}}

const mapDispatchToProps = dispatch=>({
  setResult : result => dispatch(setResult(result))
})
export default connect(null,mapDispatchToProps)(Editor);

import React from 'react';
import "./Timer.css";
const calcul=(msec)=>
{return {hours :parseInt(msec/360),
min :parseInt((msec%360) / 60),
sec: parseInt((msec%60))}}

class Timer extends React.Component{
constructor(props){
super(props)
this.state={
  time:calcul(Number(localStorage.timer)||0),
  msec:Number(localStorage.timer)||0,
  pause:false
}
setInterval(()=>{
 if(this.state.pause){
   this.saveTime()
  this.setState({msec:this.state.msec+1,time:calcul(this.state.msec)})}
},1000)

}
componentDidMount(){
  this.setState({pause:!this.state.pause})
}
  saveTime = () =>{
    localStorage.setItem('timer', this.state.msec);
    
  }
  render(){
  return (
    <div>
        <div id="date">
          <span id="hour">{this.state.time.hours<10?"0"+this.state.time.hours:this.state.time.hours}:</span>
          <span id="min">{this.state.time.min<10?"0"+this.state.time.min:this.state.time.min}:</span>
          <span id="sec">{this.state.time.sec<10?"0"+this.state.time.sec:this.state.time.sec}</span>
        </div>
      
    </div>


  );}
}

export default Timer;

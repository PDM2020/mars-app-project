var React = require('react');
var ReactDOM = require('react-dom')

//componentvar Timer = React.createClass({
var Timer = React.createClass({
 getInitialState: function(){
   return {
     secondsElapsed: 0
   }
 },

 resetTimers: function(){
   clearInterval(this.interval);
   this.setState({ secondsElapsed: 0 });
   this.start();
 },

 tick: function(){
   this.setState({ secondsElapsed: this.state.secondsElapsed +1 });
 },

 start: function(){
   this.interval = setInterval(this.tick, 1000);
 },

 componentDidMount: function(){
   setTimeout(this.start, this.props.timeout);
 },

 render: function(){
   return (
   <p>
     { this.props.name } has { this.state.secondsElapsed }s elapsed
     <button onClick= {this.resetTimer} >RESET</button>
   </p>

   );
   }
});

var Timers = React.createClass({

 render: function() {
  return (
    <div>
      <Timer timeout={0}        name="Timer1" reset={this.resetTimers} />
      <Timer timeout={500 * 10} name="Timer2" reset={this.resetTimers} />
      <Timer timeout={700 * 10} name="Timer3" reset={this.resetTimers} />
    </div>
  )
 }
});

ReactDOM.render(<Timers />, document.querySelector('.mount-node'));

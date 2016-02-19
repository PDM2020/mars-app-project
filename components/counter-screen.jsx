var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, BrowserHistory, Redirect } from 'react-router';

var Counter = React.createClass({
  //timer component
  // var Timer = React.createClass({

    getInitialState: function(){
     return {
       secondsElapsed: 59
       };
    },
      tick: function(){
        this.setState(
        {secondsElapsed:this.state.secondsElapsed -1}
        );
        },

      componentWilllMount: function(){},

      componentDidMount: function(){
        this.interval = setInterval(this.tick, 1000);
        },

    render: function() {
      return (
    <div>
      <section className="mars-quiz">
        <div className="count-down">
          <span>00:{this.state.secondsElapsed}</span>
          </div>
          <button className="allCaps btn-box">no pressure!</button>
        </section>
      </div>
    )
  }
  });
// });
// end of counter html mark up

module.exports = Counter;

var React = require('react');
var ReactDOM = require('react-dom');
// import { Router, Route, BrowserHistory, Redirect } from 'react-router';

// var elapsed = Math.round(this.state.elapsed / 100);
//   // This will give a number with one digit after the decimal dot (xx.x):
// var seconds = (elapsed / 10).toFixed(1);

// var Counter = React.createClass({

  //timer component
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
        this.interval = setInterval(this.tick, 1500);
        },

    render: function() {
      return (
    <div>
      <section className="mars-quiz">
        <div className="count-down">
          <span>:{this.state.secondsElapsed}</span>
          </div>
          <button className="allCaps btn-box">no pressure!</button>
        </section>
      </div>
    )
  }
  });
// });
// end of counter html mark up

// module.exports = Counter;

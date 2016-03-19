var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserHistory} from 'react-router';

var Counter = React.createClass({

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

module.exports = Counter;

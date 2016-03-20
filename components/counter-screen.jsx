var React = require('react');

import {BrowserHistory} from 'react-router';

var Counter = React.createClass({

  //timer component
    getInitialState: function(){
     return {
       secondsToElapse: this.props.initialStartTime
       };
    },

    componentWillReceiveProps(nextProps) {
      if(nextProps.startTimer) this.startTimer();
    },
    startTimer(){
      this.interval = setInterval(this._decrementCounter, 1000);
    },

    _decrementCounter(){
      this.setState({secondsToElapse: this.state.secondsToElapse - 1});
      },

    componentDidUpdate(prevProps,prevState) {
      if(this.state.secondsToElapse === 0) this.props.onTimerFinished();
    },

    componentWillUnmount(){
      clearInterval(this.interval);
    },

      render () {
        return (
          <div className={this.props.startTimer ? "count-down" : "count-down hidden-counter" }> :{this.state.secondsToElapse}</div>
    )
  },
  });

Counter.propTypes = {
  initialStartTime: React.PropTypes.number.isRequired,
  startTimer: React.PropTypes.bool.isRequired,
  onTimerFinished: React.PropTypes.func.isRequired
};
Counter.defaultProps = {
  initialStarTime: 60
};
// end of counter html mark up

module.exports = Counter;

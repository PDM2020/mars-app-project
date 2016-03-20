var React = require('react');
import {browserHistory} from 'react-router';

import Counter from './counter-screen.jsx';
import QuestionPage from './questionPage-screen.jsx';

var questions = [
 	    {
  	    question: 'do you like mars?',
  	    answer: true
  	  },
  	    {
  	    question: 'can you swim?',
  	    answer: true
  	  },
  	    {
  	    question: 'can you sit for long periods of time?',
  	    answer: true
	}
];

var TakeTest = React.createClass({
  getInitialState(){
  return {startTimer: false};
  },

  startQuiz: function(){
    this.setState({startTimer: true});
  },

  _handleCorrect(){
    browserHistory.push('/accepted');
  },

  _handleFailure(){
    browserHistory.push('/rejected');
  },

    render(){
    return  (
      <section className="mars-quiz">
          <Counter
            initialStartTime={60}
            onTimerFinished={this._handleFailure}
            startTimer={this.state.startTimer} />

          { !this.state.startTimer ? <button className="allCaps btn-box" onClick={this.startQuiz}>begin evaluation</button> : ''}
          { !this.state.startTimer ? '' : <QuestionPage onCorrect={this._handleCorrect} onFailure={this._handleFailure} questions={questions}/>}
    </section>

    )
  }
});
module.exports = TakeTest;

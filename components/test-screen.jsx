var React = require('react');
import {browserHistory} from 'react-router';

import Counter from './counter-screen.jsx';
import QuestionPage from './questionPage-screen.jsx';

var TakeTest = React.createClass({
  getInitialState({
    startTimer: false
  },
  _handleCorrect(){
    browserHistory.push('./accepted');
  },
  _handleFailure(){
    browserHistory.push('./rejected');
  },
  getInitialState(){
    return {startTimer: false};
  },
  startQuiz: function(){
    this.setState({startTimer: true});

    render()
    return(
      <section className="mars-quiz">
          <div className="count-down">
          <Counter
            initialStartTime={10}
            onTimeFinished={this._handleFailure}
            startTimer={this.state.startTimer}/>
        </div>
          {!this.state.startTimer ? <button className="btn" onClick={this.startQuiz}><span>begin evaluation</span></button>: ''}
          {!this.state.startTimer ?  : <QuestionPage onCorrect={this._handleCorrect} onFailure={this._handleFailure questions={question}/>}
        </div>
    </section>
  }
  }
});
module.exports = TakeTest;

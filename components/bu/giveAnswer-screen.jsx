var React = require('react');
import {BrowserHistory} from 'react-router';

var GiveAnswer = React.createClass({

  getInitialState: function() {
    return {
      question:''
    };
  },

  _handleTrue() {
    this.props.onAnswer(true);
  },

  render() {
    return (
      <div>
        <p>{this.props.currentQuestion.question}</p>
        <button onClick={this._handleTrue}>True</button>
        <button onClick={() => this.props.onAnswer(false)}>False</button>
      </div>
    );
  }

});
GiveAnswer.propTypes = {
  currentQuestion: React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.bool.isRequired
  }).isRequired,
  onAnswer: React.PropTypes.func.isRequired
};

module.exports = GiveAnswer;

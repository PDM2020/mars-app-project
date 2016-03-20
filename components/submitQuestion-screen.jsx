var React = require('react');

var SubmitQuestion = React.createClass({

  _handleTrue() {
    this.props.onAnswer(true);
  },

  render() {
    return (
      <div>
        <h3>{this.props.currentQuestion.question}</h3>
          <div>
        <button className="btn-box" onClick={this._handleTrue}>True</button>
        <button onClick={() => this.props.onAnswer(false)}>False</button>
      </div>
    </div>
    );
  }
});
SubmitQuestion.propTypes = {
    currentQuestion: React.PropTypes.shape({
          question: React.PropTypes.string.isRequired,
            answer: React.PropTypes.bool.isRequired}).isRequired,
          onAnswer: React.PropTypes.func.isRequired
};

module.exports = SubmitQuestion;

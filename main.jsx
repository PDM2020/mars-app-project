var React= require('react');
var ReactDOM = require('react-dom');

var TweetBox = React.createClass({

  propTypes:{
    maxLength: React.PropTypes.number.isRequired
  },

  getDefaultProps:function(){
    return {
      maxLength: 140
    }
  },

  getInitialState: function(){
    return {
      text:'',
      photoAdded: false
    }
  },

  handleChange: function(event){
  this.setState({text:event.target.value});
  },

  remainingChars: function(){
        if(this.state.photoAdded) {
          return (this.props.maxLength - 23 - this.state.text.length);
          } else {
          return(this.props.maxLength - this.state.text.length);
      }
  },
    overFlowAlert: function(){
    if(this.remainingChars() < 0){

      if(this.state.photoAdded){
      var beforeOverFlowText = this.state.text.substring(130 - 23 , this.props.maxLength);
      var overFlowText = this.state.text.substring(this.props.maxLength - 23);
} else {
      var beforeOverFlowText = this.state.text.substring(130, this.props.maxLength);
      var overFlowText = this.state.text.substring(this.props.maxLength);
      }
      return (
        <div className="alert alert-warning">
          <strong>oops too long:{beforeOverFlowText}<span className="bg-danger">{ overFlowText }</span></strong>
          </div>
      )
    } else {
      return "";
    }
  },

  togglePhoto: function(){
    this.setState({photoAdded: !this.state.photoAdded})
  },

  render: function (){
    return (

      <div className="well clearfix">
        {this.overFlowAlert()}
      <textarea onChange={this.handleChange} className="form-control"></textarea><br/>
      <span> {this.remainingChars()} </span>
        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0 && !this.state.photoAdded } >Tweet</button>
        <button className="btn btn-default pull-right" onClick={this.togglePhoto}>
          { this.state.photoAdded ? " ✓Photo Added" : "Add Photo" }
        </button>
    </div>
    )
  }
});

var MultiTweetBox = React.createClass({
  render:function(){
    return (
      <div>
<TweetBox maxLength={180}/>
<TweetBox maxLength={200}/>
<TweetBox maxLength={300}/>
<TweetBox maxLength={400}/>
<TweetBox />
</div>
    )
  }
})
ReactDOM.render(<MultiTweetBox />, document.querySelector('.tweet-box'));

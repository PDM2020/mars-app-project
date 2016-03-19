var React = require('react');

import { Router, Route, BrowserHistory, Redirect } from 'react-router';

var Rejected = React.createClass({
  changePage:function(){
  this.props.history.push('/questionpage')
  },

render:function(){
    return (
      <section className="mars-quiz">
          <h1 className="nf">wrong answer</h1>
          <button className="allCaps btn-box" onClick={this.changePage}>try again</button>
      </section>
    )
  }
});
module.exports = Rejected;

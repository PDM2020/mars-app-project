var React = require('react');
import { Router, Route, BrowserHistory, Redirect } from 'react-router';

var Accepted = React.createClass({

  changePage:function(){
  this.props.history.push('/welcome')
  },

render:function(){
    return (
      <div>
    <section className="mars-quiz">
          <h1 className="nf">Bon Voyage</h1>
          <button className="allCaps btn-box" onClick={this.changePage}>Welcome Page</button>
      </section>
    </div>
    )
  }
});
module.exports = Accepted;

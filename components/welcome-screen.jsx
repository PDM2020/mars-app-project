var React = require('react');

import {BrowserHistory} from 'react-router';

var Welcome = React.createClass({

  changePage(){
    this.props.history.push('/take-test')
  },

render:function(){
    return (
    <section className="mars-quiz">
      <button className="allCaps btn-box"onClick={this.changePage}>begin journey</button>
    </section>
    );
  }
});
module.exports = Welcome;

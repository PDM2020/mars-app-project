var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, BrowserHistory, Redirect } from 'react-router';

var Welcome = React.createClass({

render:function(){
    return (

    <section className="mars-quiz">

          <button className="allCaps btn-box">Begin journey</button>

      </section>

    )
  }
});
module.exports = Welcome;

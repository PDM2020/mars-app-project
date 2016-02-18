var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, BrowserHistory, Redirect } from 'react-router';

// import Question from '.components/question-screen.jsx';
// import Welcome from '.components/welcome-screen.jsx';
// import NoMatch from '.components/404-screen.jsx';

var Welcome = React.createClass({

render:function(){
    return (
      <div className="wrapper">
      <aside>
        <h1>Mars</h1>
        <div className="mars-rocket">
          <i className="fa fa-space-shuttle"></i>
        </div>
        </aside>
<section className="mars-quiz">
  <div className="count-down">
    <span>00:59</span>
      </div>
        <div>
          <button className="allCaps btn-box">begin your journey</button>
        </div>
      </section>
    </div>
    )
  }
});
module.exports = Welcome;

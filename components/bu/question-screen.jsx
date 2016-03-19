var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, BrowserHistory, Redirect } from 'react-router';

var Question = React.createClass({

render:function(){
    return (
      <div>
        <section className="mars-quiz">
          <div className="count-down">
            <span><Counter/></span>
            </div>
            <button className="allCaps btn-box">no pressure!</button>
          </section>
        </div>
    )
  }
});
module.exports = Question;

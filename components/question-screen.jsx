var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, BrowserHistory, Redirect } from 'react-router';

var Question = React.createClass({

render:function(){
    return (
      <div>
    <section className="mars-quiz">
        <div>
          <button className="allCaps btn-box">start quiz</button>
        </div>
      </section>
    </div>
    )
  }
});
module.exports = Question;

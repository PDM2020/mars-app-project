'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, BrowserHistory, Redirect } from 'react-router';

import Welcome from './components/welcome-screen.jsx';
import Question from './components/question-screen.jsx';

//components
var MarsApp = React.createClass({

render:function(){
    return (

< Welcome />

    );
  }
});
ReactDOM.render(<MarsApp/>, document.querySelector('#mars-app'));

'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Welcome from './components/welcome-screen.jsx';
import Question from './components/question-screen.jsx';
import Counter from './components/counter-screen.jsx';
import NotFound from './components/notfound-screen.jsx';

//components
var MarsApp = React.createClass({

render:function(){
    return (
        <Router history={browserHistory}>
            <Redirect from="/" to="/welcome"/>
            <Route path='/welcome'component={Welcome}/>
            <Route path='/mars-test'component={Question}/>
            <Route path='/countdown'component={Counter}/>
            <Route path="*"component={NotFound}/>
        </Router>
    );
  }
});
ReactDOM.render(<MarsApp/>, document.querySelector('#mars-app'));

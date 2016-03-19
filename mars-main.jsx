var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, browserHistory, Redirect} from 'react-router';

import Welcome from './components/welcome-screen.jsx';
import SubmitQuestion from './components/submitQuestion-screen.jsx';
import QuestionPage from './components/questionPage-screen.jsx';
import Counter from './components/counter-screen.jsx';
import NotFound from './components/notfound-screen.jsx';
import Rejected from './components/rejected-screen.jsx';
import Accepted from './components/accepted-screen.jsx';

//components
var MarsApp = React.createClass({

render:function(){
    return (
        <Router history={browserHistory}>
            <Redirect from="/" to="/welcome"/>
            <Route path='/welcome'component={Welcome}/>
            <Route path='/questionpage'component={QuestionPage}/>
            <Route path='/submitquestion'component={SubmitQuestion}/>
            <Route path='/countdown'component={Counter}/>
            <Route path="*"component={NotFound}/>
        </Router>
    );
  }
});
ReactDOM.render(<MarsApp />, document.querySelector('#mars-app'));

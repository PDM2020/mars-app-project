var React = require('react');

import {BrowserHistory} from 'react-router';

var Welcome = React.createClass({

  // contextTypes: {
  //   router: PropTypes.React.object.isRequired;
  // }

  changePage(){
    this.props.history.push('/questionpage')
    //   this.context.router.push('/questionpage')
  },
/////////////////////////////////////////////////////////////
// contextTypes: {
//   router: React.PropTypes.object.isRequired
// },
// changePage(){
// this.context.router.push('/questionpage')
// }


render:function(){
    return (
    <section className="mars-quiz">
      <button className="allCaps btn-box"onClick={this.changePage}>begin journey</button>
    </section>
    )
  }
});
module.exports = Welcome;

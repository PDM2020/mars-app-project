var React = require('react');

var NotFound = React.createClass({

  changePage:function(){
  this.props.history.push('/welcome')
  },

render:function(){
    return (
      <section className="mars-quiz">
          <h1 className="nf">no page by that name</h1>
          <button className="allCaps btn-box" onClick={this.changePage}>Welcome Page</button>
      </section>
    )
  }
});
module.exports = NotFound;

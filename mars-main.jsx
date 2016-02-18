var React = require('react');
var ReactDOM = require('react-dom');

var MarsApp = React.createClass({


  render:function(){
    var number = this.state.todos.length;
    return (
      <div className="todo-list">
        <h1>Mars App</h1>
        <div className="mars-container">
          Hello Mars!
        </div>

    )
  }
});


ReactDOM.render(<MarsApp />, document.querySelector('#mars-app'));

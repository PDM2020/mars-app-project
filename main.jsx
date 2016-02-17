var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

  getInitialState: function(){
    return {
        todos: [
          {title: 'placeholder todo', complete: false},
          {title: 'placeholder todo', complete: false},
          {title: 'placeholder todo', complete: false}
        ]
      }
    },

      toggleComplete: function(theTodoFromTheInstance){
        var newTodoArray = this.state.todos.map(function(theTodoToModify){
          if(theTodoFromTheInstance === theTodoToModify){
            theTodoToModify.complete = !theTodoToModify.complete;
          }
          return theTodoToModify;
        });

        this.setState({todos: newTodoArray});

      },

    renderTodos: function(todo, index){
      return <Todo key={index}
                    id={index}
                    toggleComplete={this.toggleComplete}
                    todoData={todo}/>;
    },

  render:function(){
    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        <ul>
          { this.state.todos.map(this.renderTodos)}
        </ul>
      </div>
    )
  }
});

var Todo = React.createClass({

  getInitialState: function(){
    return{};
  },

  tellParentToToggleTodoComplete: function(){
    this.props.toggleComplete(this.props.todoData);
  },

  render (){
    return (
      <li> {this.props.todoData.title}
        <input type="checkbox" id={this.props.id} checked={this.props.todoData.complete} onClick={this.tellParentToToggleTodoComplete} />
        <label htmlFor={this.props.id} key={this.props.key}></label>
        <button><i className="fa fa-trash"></i></button>
        </li>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('#todo-app'));

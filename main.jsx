var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

  getInitialState: function(){
    return {
        todos: []
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

removeTodo: function(todoData){
  var newTodoArray = this.state.todos.filter(function(theTodoToRemove){
 return todoData === theTodoToRemove ? false : true;

  });

  this.setState({todos: newTodoArray});


},

    renderTodos: function(todo, index){
      return <Todo key={index}
                    id={index}
                    toggleComplete={this.toggleComplete}
                    removeTodo={this.removeTodo}
                    todoData={todo} />;
    },

    addTodo: function(event){

      event.preventDefault();

      if(this.refs.addTodo.value){
        this.state.todos.push({title: this.refs.addTodo.value, complete:false});
        this.setState({todos:this.state.todos});
        this.refs.addTodo.value= '';
      }
  },

  render:function(){
    var number = this.state.todos.length;
    return (
      <div className="todo-list">
        <h1>To Do List</h1>
        <div className="add-todo">
          <form name="addTodoForm" onSubmit={this.addTodo}>
            <input type="text" ref="addTodo"/>
            <span>Hit enter to add to List</span>
            </form>
        </div>
        <ul>
        { this.state.todos.map(this.renderTodos)}
        </ul>
          <div className="todo-admin">
            <div>
              { number } { number > 1 || number === 0 ? "todos": "todo"}
            </div>
            <div>
              
          </div>
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

  tellParentToToggleTodoComplete: function(){
    this.props.removeTodo(this.props.todoData);
  },

  render: function(){
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

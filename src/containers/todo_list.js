import _ from 'lodash';
import React, { Component } from 'react';
import Todo from '../components/todo';
import { connect } from 'react-redux';
import { todoToggle, todoDelete, VisibilityFilters } from '../actions';

class TodoList extends Component {
  renderTodos(){
    return _.map(this.props.todos, todo => {
      return (
        <Todo 
          key={todo.id} 
          {...todo} 
          onClickToggle={() => this.props.todoToggle(todo.id)} 
          onClickDelete={() => this.props.todoDelete(todo.id)} />
      );
    });
  }

  render() {
    return (
      <ul>{this.renderTodos()}</ul>
    );
  }
}

function getVisibleTodos(todos, filter) {
  switch(filter){
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return _.omit(todos, todo => (!todo.completed));
    case VisibilityFilters.SHOW_ACTIVE:
      return _.omit(todos, todo => (todo.completed));
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
}
export default connect(mapStateToProps, { todoToggle, todoDelete })(TodoList);
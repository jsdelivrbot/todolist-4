import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { todoAdd } from '../actions';
import { connect } from 'react-redux';

class TodoAdd extends Component {
  
  onSubmit(values){
    const { text } = values;
    if (!text){
      return;
    }
    this.props.todoAdd(text);
    this.props.reset();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            name="text"
            component="input"
            type="text" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'addTodo'
})(
  connect(null, { todoAdd })(TodoAdd)
);
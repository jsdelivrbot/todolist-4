import React, { Component } from 'react';
import TodoList from '../containers/todo_list';
import TodoAdd from '../containers/todo_add';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoAdd />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

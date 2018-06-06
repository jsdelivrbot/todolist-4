import _ from 'lodash';
import { TODO_ADD, TODO_TOGGLE, TODO_DELETE } from '../actions';

export default function(state = {}, action){
  switch(action.type){
    case TODO_ADD:
      return { ...state, [action.payload.id]: action.payload }
    case TODO_TOGGLE:
      let newTodo = state[action.payload];
      newTodo.completed = !newTodo.completed;
      return { ...state, [action.payload]: newTodo };
    case TODO_DELETE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
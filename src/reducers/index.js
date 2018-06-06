import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todosReducer from './todos_reducer';
import visibilityFilterReducer from './visibilityFilter_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  form: formReducer
});

export default rootReducer;

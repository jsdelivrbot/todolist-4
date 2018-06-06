let TodoNextId = 0;

export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOGGLE';
export const TODO_DELETE = 'DODO_DELETE';
export const VISIBILITY_FILTER_SET = 'VISIBILITY_FILTER_SET';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function todoAdd(text) {
  const todo = {
    id: TodoNextId++,
    text: text,
    completed: false
  };

  return {
    type: TODO_ADD,
    payload: todo
  };
}

export function todoToggle(id) {
  return {
    type: TODO_TOGGLE,
    payload: id
  };
}

export function todoDelete (id) {
  return {
    type: TODO_DELETE,
    payload: id
  };
}

export function visibilityFilterSet (filter) {
  return {
    type: VISIBILITY_FILTER_SET,
    payload: filter
  };
}
import { VISIBILITY_FILTER_SET, VisibilityFilters } from '../actions';

export default function(state = VisibilityFilters.SHOW_ALL, action) {
  switch(action.type){
    case VISIBILITY_FILTER_SET:
      return action.payload
    default:
      return state;
  }
}
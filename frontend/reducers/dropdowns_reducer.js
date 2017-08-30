import { RECEIVE_DROPDOWN, REMOVE_DROPDOWN, CLEAR_DROPDOWNS } from '../actions/dropdown_actions';

const defaultState = {
  list: [],
};

const DropdownsReducer = (state = defaultState, action) => {
  let nextState; 
  switch(action.type){

    case RECEIVE_DROPDOWN:
      nextState = Object.assign({}, state);

      if (nextState.list.includes(action.name)) {
        return nextState;
      } 
      else {
        const mergedArray = nextState.list.concat(action.name);
        return Object.assign({}, state, { list: mergedArray });
      }

    case REMOVE_DROPDOWN:
      nextState = Object.assign({}, state);
      const index = nextState.list.indexOf(action.name); 

      nextState.list.splice(index, 1) 

      return nextState;
    case CLEAR_DROPDOWNS:
      return defaultState; 
    default:
      return state;

  }
}

export default DropdownsReducer; 
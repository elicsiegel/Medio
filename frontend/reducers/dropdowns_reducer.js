import { RECEIVE_DROPDOWN, CLEAR_DROPDOWNS } from '../actions/dropdown_actions';

const defaultState = {
  searchBar: false,
  searchResults: false 
};

const DropdownsReducer = (state = defaultState, action) => {
  let nextState; 
  switch(action.type){
    case RECEIVE_DROPDOWN:
      nextState = Object.assign({}, state, action.dropdown);
      return nextState; 
    case CLEAR_DROPDOWNS:
      return defaultState; 
    default:
      return state;

  }
}

export default DropdownsReducer; 
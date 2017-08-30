export const RECEIVE_DROPDOWN = "RECEIVE_DROPDOWN";
export const REMOVE_DROPDOWN = "REMOVE_DROPDOWN";
export const CLEAR_DROPDOWNS = "CLEAR_DROPDOWNS"; 

export const receiveDropdown = (name) => {
  return {
    type: RECEIVE_DROPDOWN,
    name 
  }
}

export const removeDropdown = (name) => {
  return {
    type: REMOVE_DROPDOWN,
    name 
  }
}

export const clearDropdowns = () => {
  return {
    type: CLEAR_DROPDOWNS
  }
}

export const deactivateAllDropdowns = () => {
  return (dispatch) => {
    dispatch(clearDropdowns());
  }
}

export const activateDropdown = (name) => {
  return (dispatch) => {
    dispatch(receiveDropdown(name));
  }
}

export const deactivateDropdown = (name) => {
  return (dispatch) => {
    dispatch(removeDropdown(name))
  }
}


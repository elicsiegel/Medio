export const RECEIVE_DROPDOWN = "RECEIVE_DROPDOWN";
export const CLEAR_DROPDOWNS = "CLEAR_DROPDOWNS"; 

export const receiveDropdown = (name) => {
  return {
    type: RECEIVE_DROPDOWN,
    dropdown: {[name]: true} 
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



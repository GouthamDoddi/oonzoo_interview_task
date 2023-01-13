import { combineReducers } from 'redux';

export const userDetails = (state = {}, action) => {
    switch (action.type) {
      case 'userDetails':
        state = action.data;
  
        return state;
      default:
        return state;
    }
};

export const currentDrawerPage = (state = 'Home', action) => {
  switch (action.type) {
    case 'currentDrawerPage':
      state = action.data;

      return state;
    default:
      return state;
  }
};

export const editMode = (state = false, action) => {
  switch (action.type) {
    case 'editMode':
      state = action.data;

      return state;
    default:
      return state;
  }
};

export const allProducts = (state = [], action) => {
  switch (action.type) {
    case 'allProducts':
      state = action.data;

      return state;
    default:
      return state;
  }
};

const allReducers = combineReducers({
    userDetails,
    currentDrawerPage,
    editMode,
    allProducts
});

export default allReducers;

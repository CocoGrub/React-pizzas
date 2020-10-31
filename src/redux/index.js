import { createStore } from 'redux';

const header = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(header, 6);
export default store;

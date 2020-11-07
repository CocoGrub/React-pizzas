const initialState = {
  category: 0,
  sortBy: { name: 'Популярности', type: 'popular', order: 'desc' },
};

const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SORT_BY':
      return { ...state, sortBy: payload };
    case 'SET_CATEGORY':
      return { ...state, category: payload };
    default:
      return state;
  }
};

export default filtersReducer;

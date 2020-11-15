import axios from 'axios';
export const setPizzas = (items) => ({
  //action creator
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  axios
    .get(
      `http://localhost:3000/pizzas?${category !== null ? `_category=${category}` : ''}&_sort=${
        sortBy.type
      }&order=desc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

import axios from 'axios';
export const setPizzas = (items) => ({
  //action creator
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = () => (dispatch) => {
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    console.log('fetchpizzas', data);
    dispatch(setPizzas(data));
  });
};

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

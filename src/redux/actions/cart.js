export const addPizzaToCartAC = (pizza) => ({
  type: 'ADD-PIZZA-TO-CART',
  payload: pizza,
});
export const clearCartAC = () => ({
  type: 'CLEAR-CART',
});
export const removePizzasGroupAC = (id) => ({
  type: 'REMOVE-PIZZAS-GROUP',
  payload: id,
});
export const removeOne = (id) => ({
  type: 'REMOVE-ONE',
  payload: id,
});
export const addOne = (id) => ({
  type: 'ADD-ONE',
  payload: id,
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ings: {
    cheese: { name: 'Сыр', price: 15, count: 0 },
    olives: { name: 'Оливки', price: 25, count: 0 },
    sausage: { name: 'Колбаса', price: 35, count: 0 },
    mushrooms: { name: 'Грибы', price: 20, count: 0 },
  },
  price: 100,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addIng: (state, action) => {
      state.ings[action.payload].count++;
      state.price += state.ings[action.payload].price;
    },
    removeIng: (state, action) => {
      state.ings[action.payload].count--;
      state.price -= state.ings[action.payload].price;
    },
  },
});

export const { addIng, removeIng } = pizzaSlice.actions;

export default pizzaSlice.reducer;

// addIng('sausage') // {type: "pizza/addIng", payload: 'sausage'}

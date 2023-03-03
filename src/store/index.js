import { configureStore } from '@reduxjs/toolkit';

import pizzaReducer from './reducers/pizza.reducer';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

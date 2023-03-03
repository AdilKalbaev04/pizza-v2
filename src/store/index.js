import { configureStore } from '@reduxjs/toolkit';

import orderReducer from './reducers/order.reducer';
import pizzaReducer from './reducers/pizza.reducer';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    orders: orderReducer,
  },
});

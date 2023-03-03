import { fetchOrderItem, fetchOrders } from '@/api/request';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const orderFetch = createAsyncThunk(
  'orders/fetch',
  (_, { rejectWithValue }) => {
    return fetchOrders()
      .then((orders) => orders)
      .catch((error) => rejectWithValue(error));
  }
);

export const orderFetchById = createAsyncThunk(
  'orders/fetchItem',
  async (id, { rejectWithValue }) => {
    try {
      const order = await fetchOrderItem(id);
      if (!order) throw new Error('Ошибка запроса заказов');
      return order;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  orders: [],
  errors: null,
  currentOrder: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: {
    [orderFetch.pending]: (state) => {
      state.loading = true;
    },
    [orderFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = Object.keys(action.payload)
        .map((key) => {
          return {
            ...action.payload[key],
            id: key,
          };
        })
        .reverse();
    },
    [orderFetch.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },

    [orderFetchById.pending]: (state) => {
      state.loading = true;
    },
    [orderFetchById.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload;
    },
    [orderFetchById.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default orderSlice.reducer;

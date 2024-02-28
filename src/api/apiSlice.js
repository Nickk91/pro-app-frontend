// import { createApi, fetchBaseQuery, createAsyncThunk } from "@reduxjs/toolkit/query/react";


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for incrementing the counter
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    // Simulating an async operation (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

// Async thunk for decrementing the counter
export const decrementAsync = createAsyncThunk(
  'counter/decrementAsync',
  async (amount) => {
    // Simulating an async operation (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    // Standard reducer for incrementing the counter
    increment(state) {
      state.value++;
    },
    // Standard reducer for decrementing the counter
    decrement(state) {
      state.value--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message || null;
      })
      .addCase(decrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value -= action.payload;
      })
      .addCase(decrementAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message || null;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCounterValue = (state) => state.counter.value;

export default counterSlice.reducer;



// export const apiSlice =  createApi ({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASEURL}),
    
    

//     });



    // export const {
    //     useGetTodosQuery,
    //     useCreateTodoMutation,
    //     useEditTodoMutation,
    //     useDeleteTodoMutation,
    //   } = apiSlice;

    
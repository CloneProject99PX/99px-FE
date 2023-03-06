import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const __somethingThunk = createAsyncThunk(
//     "thunk",
//     async (payload, thunkAPI) => {
//         try {
//             return null;
//         } catch (error) {
//             return null;
//         }
//     }
// );

const initialState = {};

const todosSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default todosSlice.reducer;
export const {} = todosSlice.actions;

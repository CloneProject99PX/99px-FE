import { createSlice, current } from "@reduxjs/toolkit";

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

const initialState = {
  categories: [
    `Abstract`,
    `Aerial`,
    `Animals`,
    `Black and White`,
    `Celebrities`,
    `City & Architecture`,
    `Commercial`,
    `Concert`,
    `Family`,
    `Fashion`,
    `Food`,
    `Fine Art`,
    `Film`,
    `Journalism`,
    `Landscapes`,
    `Macro`,
    `Nature`,
    `Night`,
    `People`,
    `Performing Arts`,
    `Sport`,
    `Still Life`,
    `Street`,
    `Transportation`,
    `Travel`,
    `Underwater`,
    `Urban Exploration`,
    `Wedding`,
    `Other`,
  ],
  checked: [],
  photographers: false,
  sortBy: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    checkFilter: (state, action) => {
      if (!state.checked.includes(action.payload.value)) {
        return {
          ...state,
          checked: [...state.checked.concat(action.payload.value)],
        };
      } else {
        return {
          ...state,
          checked: [
            ...state.checked.filter((val) => !(val === action.payload.value)),
          ],
        };
      }
    },
    allCategoriesFilter: (state) => {
      return { ...state, checked: [] };
    },
    checkPhotographer: (state) => {
      return { ...state, photographers: !state.photographers };
    },
    checkSortBy: (state) => {
      return { ...state, sortBy: !state.sortBy };
    },
  },
  extraReducers: {},
});

export default filterSlice.reducer;
export const {
  checkFilter,
  allCategoriesFilter,
  checkPhotographer,
  checkSortBy,
} = filterSlice.actions;

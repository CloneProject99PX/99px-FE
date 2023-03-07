import { configureStore } from "@reduxjs/toolkit";
import tempModule from "../modules/tempModule";
import filter from "../modules/filter";

const store = configureStore({
  reducer: {
    tempModule,
    filter,
  },
});

export default store;

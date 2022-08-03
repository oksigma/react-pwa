import { configureStore } from "@reduxjs/toolkit";
import groupSliceReducer from "./slices/groups.js";

const store = configureStore({
  reducer: {
    group: groupSliceReducer
  }
});

export default store;
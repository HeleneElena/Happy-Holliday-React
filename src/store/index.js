import { configureStore } from "@reduxjs/toolkit";
import holidaysSlice from "./holidaysSlice";
import textReducer from "./textSlice";

export const store = configureStore({
    reducer: {
        holidays: holidaysSlice,
        text: textReducer,
    }
});
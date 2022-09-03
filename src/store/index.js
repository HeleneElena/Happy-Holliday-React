import { configureStore } from "@reduxjs/toolkit";
import holidaysSlice from "./holidaysSlice";
import textReducer from "./textSlice";
import imageReducer from "./imgSlice";

export const store = configureStore({
    reducer: {
        holidays: holidaysSlice,
        text: textReducer,
        image: imageReducer,
    }
});
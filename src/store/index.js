import { configureStore } from "@reduxjs/toolkit";
import { holidaysSlice } from './holidaysSlice';

export const store = configureStore({
    reducer: {
        holidays: holidaysSlice,

    }
});
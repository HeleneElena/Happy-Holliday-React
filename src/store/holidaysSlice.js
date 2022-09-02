import { createSlice } from "@reduxjs/toolkit";

export const holidaysSlice = createSlice({
    name: 'holidays',
    initialState: {
        holidays: {},
        holiday: '',
    },
    reducers: {
        setHoliday(state, action) {
            state.holiday = action.payload;
        }
    }
});

export const {setHoliday} = holidaysSlice.actions;

export default holidaysSlice.reducer;
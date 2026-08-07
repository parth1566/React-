import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: "dark"
    },
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
        },
        setTheme: (state,action) => {
            state.mode = action.payload;
        }
    }
});

export const { toggleTheme, setTheme} = themeSlice.actions;
export default themeSlice.reducer;
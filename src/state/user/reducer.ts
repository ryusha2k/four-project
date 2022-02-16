import { createReducer } from "@reduxjs/toolkit";
import { setTheme, toggleTheme } from "./actions";
import { UserState } from "../types";
import { isDarkLocalStorageKey } from "../../config/constants";


export const initialState: UserState = {
    isDark: Boolean(JSON.parse(window.localStorage.getItem(isDarkLocalStorageKey) || "false")),
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(toggleTheme, (state) => {
            window.localStorage.setItem(isDarkLocalStorageKey, JSON.stringify(!state.isDark));
            return ({...state, isDark: !state.isDark});
        }).addCase(setTheme, (state, {payload: {isDark}}) => ({...state, isDark})),
);

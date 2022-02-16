import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../types";

const initialState: ProfileState = {
    hasRegistered: false,
    isInitialized: false,
    isLoading: false
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        profileFetchStart: (state) => ({
            ...state,
            isLoading: true
        }),
        profileClear: () => ({
            ...initialState
        })
    }
});

export const {profileClear, profileFetchStart} = profileSlice.actions;

export default profileSlice.reducer;

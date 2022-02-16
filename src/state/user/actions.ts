import { createAction } from "@reduxjs/toolkit";


export const toggleTheme = createAction<void>('user/toggleTheme');
export const setTheme = createAction<{ isDark: boolean; }>('user/setTheme');


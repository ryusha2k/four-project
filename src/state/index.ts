import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import { updateVersion } from "./global/actions";
import blockReducer from './block';
import user from './user/reducer';
import contractToken from './contractToken/reducer';
import contractPrivateSale from './contractPrivateSale/reducer';
import contractNFT from './contractNFT/reducer';

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        block: blockReducer,
        user,
        contractToken,
        contractPrivateSale,
        contractNFT
    },
})


store.dispatch(updateVersion());

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();


export default store;

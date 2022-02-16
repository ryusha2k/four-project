import { createAction } from "@reduxjs/toolkit";
import {ITokenData} from "./interfaces/data.interface";

export const fetchToken = createAction<void>('token/fetchToken');
export const fetchTokenSuccess = createAction<{ tokenData: ITokenData }>('token/fetchTokenSuccess');
export const fetchTokenError = createAction<{ error: Error }>('token/fetchTokenError');
export const updateTokenPartial = createAction<Partial<ITokenData>>('token/updateTokenPartial');

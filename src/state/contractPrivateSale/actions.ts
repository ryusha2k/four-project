import { createAction } from "@reduxjs/toolkit";
import {IPrivateSaleData} from "./interfaces/data.interface";

export const fetchPrivateSale = createAction<void>('sale/fetchPrivateSale');
export const fetchPrivateSaleSuccess = createAction<{ data: Partial<IPrivateSaleData> }>('sale/fetchPrivateSaleSuccess');
export const fetchPrivateSaleError = createAction<{ error: Error }>('sale/fetchPrivateSaleError');


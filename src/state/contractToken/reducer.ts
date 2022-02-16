import { createReducer } from "@reduxjs/toolkit";
import {
  fetchToken,
  fetchTokenError,
  fetchTokenSuccess, updateTokenPartial
} from "./actions";

import { initialCommonState } from "../../interfaces/common-state.interface";
import { Status } from "../../interfaces/statuses";
import {ITokenState} from "./interfaces/data.interface";



const initialState: ITokenState = {
  ...initialCommonState,
  networkBalance: '0',
  balance: '0',
  allowance: '0',
  symbol: '',
  name: '',
  decimals: 18,
  price: -1
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(fetchToken, (state) => ({
      ...state,
      stateStatus: Status.PENDING
    }))
    .addCase(fetchTokenSuccess, (state, {payload}) => ({
      ...state,
      ...payload.tokenData,
      stateStatus: Status.SUCCESS
    }))
    .addCase(fetchTokenError, (state, {payload}) => ({
      ...state,
      stateStatus: Status.ERROR,
      error: payload.error
    }))
    .addCase(updateTokenPartial, (state, {payload}) => ({
      ...state,
      ...payload
    }))
);

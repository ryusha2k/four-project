import { createReducer } from "@reduxjs/toolkit";
import { initialCommonState } from "interfaces/common-state.interface";
import { Status } from "interfaces/statuses";
import { initialUserAmounts, IPrivateSaleState } from "./interfaces/data.interface";
import { fetchPrivateSale, fetchPrivateSaleError, fetchPrivateSaleSuccess } from "./actions";


export const initialState: IPrivateSaleState = {
  ...initialCommonState,
  claimEnabledStart: 0,
  getLastTxList: [],
  getLeftTimeAmount: -1,
  hardCapEthAmount: "0",
  maximumDepositEthAmount: "0",
  minimumDepositEthAmount: "0",
  percentPerPeriod: 0,
  privateSaleEndTimestamp: 0,
  privateSaleStartTimestamp: 0,
  reachedHardCap: false,
  tokenBalanceOfContract: "0",
  tokenPerBNB: 0,
  totalDepositedEthBalance: "0",
  vestingPeriod: 0,
  whitelistEnabled: false,
  // with account
  claimableByAddressAtTime: "0",
  deposits: "0",
  userAmounts: initialUserAmounts,
  whitelist: false,
  withAccountStateStatus: Status.INITIAL
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(fetchPrivateSale, (state) => ({
            ...state,
            stateStatus: Status.PENDING
        }))
        .addCase(fetchPrivateSaleSuccess, (state, {payload}) => ({
            ...state,
            ...payload.data,
            stateStatus: Status.SUCCESS
        }))
        .addCase(fetchPrivateSaleError, (state, {payload}) => ({
            ...state,
            stateStatus: Status.ERROR,
            error: payload.error
        }))
);

import {createReducer} from "@reduxjs/toolkit";
import {
  fetchNFT,
  fetchNFTError,
  fetchNFTOwners,
  fetchNFTSuccess, fetchProgress,
  prefetchNFT,
  prefetchNFTError,
  prefetchNFTSuccess
} from "./actions";

import {initialCommonState} from "../../interfaces/common-state.interface";
import {Status} from "../../interfaces/statuses";
import {INFTState} from "./interfaces/data.interface";


const initialState: INFTState = {
  ...initialCommonState,
  addressMinted: true,
  balance: 0,
  partnerMintAvailableBy: 0,
  inWhitelist: false,
  mintActive: false,
  mintLimit: 1,
  name: "",
  symbol: "",
  totalSupply: 0,
  networkBalance: '0',
  price: '0',
  owners: [],
  progress: 0,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(fetchNFTOwners, (state, {payload}) => ({
      ...state,
      owners: payload
    }))
    .addCase(fetchProgress, (state, {payload}) => ({
      ...state,
      progress: payload
    }))
    .addCase(prefetchNFT, (state) => ({
      ...state,
      prefetchStatus: Status.PENDING
    }))
    .addCase(prefetchNFTSuccess, (state, {payload}) => ({
      ...state,
      ...payload.nftData,
      prefetchStatus: Status.SUCCESS
    }))
    .addCase(prefetchNFTError, (state, {payload}) => ({
      ...state,
      prefetchStatus: Status.ERROR,
      error: payload.error
    }))
    .addCase(fetchNFT, (state) => ({
      ...state,
      stateStatus: Status.PENDING
    }))
    .addCase(fetchNFTSuccess, (state, {payload}) => ({
      ...state,
      ...payload.nftData,
      stateStatus: Status.SUCCESS
    }))
    .addCase(fetchNFTError, (state, {payload}) => ({
      ...state,
      stateStatus: Status.ERROR,
      error: payload.error
    }))
);

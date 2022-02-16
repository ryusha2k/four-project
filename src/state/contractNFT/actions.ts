import { createAction } from "@reduxjs/toolkit";
import { INFTOwner, INFTState } from "./interfaces/data.interface";

export const prefetchNFT = createAction<void>('token/prefetchNFT');
export const prefetchNFTSuccess = createAction<{ nftData: Partial<INFTState> }>('token/prefetchNFTSuccess');
export const prefetchNFTError = createAction<{ error: Error }>('token/prefetchNFTError');

export const fetchNFT = createAction<void>('token/fetchNFT');
export const fetchNFTSuccess = createAction<{ nftData: Partial<INFTState> }>('token/fetchNFTSuccess');
export const fetchNFTError = createAction<{ error: Error }>('token/fetchNFTError');

export const fetchNFTOwners = createAction<INFTOwner[]>('token/fetchNFTOwners');
export const fetchProgress = createAction<number>('token/fetchProgress');

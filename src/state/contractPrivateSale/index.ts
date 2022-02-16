import { Dispatch } from "@reduxjs/toolkit";
import { fetchPrivateSale, fetchPrivateSaleError, fetchPrivateSaleSuccess } from "./actions";
import { IPrivateSaleData } from "./interfaces/data.interface";
import { IPrivateSaleContract } from "./interfaces/contract.interface";
import { Status } from "../../interfaces/statuses";

export const fetchPrivateSaleThunk = (privateSaleContract: IPrivateSaleContract) => async (dispatch: Dispatch) => {
    dispatch(fetchPrivateSale());
    try {
        Promise.all([
            privateSaleContract.privateSaleStartTimestamp(),
            privateSaleContract.privateSaleEndTimestamp(),
            privateSaleContract.hardCapEthAmount(),
            privateSaleContract.totalDepositedEthBalance(),
            privateSaleContract.minimumDepositEthAmount(),
            privateSaleContract.maximumDepositEthAmount(),
            privateSaleContract.tokenPerBNB(),
            privateSaleContract.claimEnabledStart(),
            privateSaleContract.whitelistEnabled(),
            privateSaleContract.vestingPeriod(),
            privateSaleContract.percentPerPeriod(),
            privateSaleContract.getLastTxList(),
            privateSaleContract.reachedHardCap(),
            privateSaleContract.tokenBalanceOfContract(),
            privateSaleContract.getLeftTimeAmount()
        ]).then((value) => {
            const data: Partial<IPrivateSaleData> = {
                privateSaleStartTimestamp: Number(value[0].toString()),
                privateSaleEndTimestamp: Number(value[1].toString()),
                hardCapEthAmount: value[2].toString(),
                totalDepositedEthBalance: value[3].toString(),
                minimumDepositEthAmount: value[4].toString(),
                maximumDepositEthAmount: value[5].toString(),
                tokenPerBNB: Number(value[6].toString()),
                claimEnabledStart: Number(value[7].toString()),
                whitelistEnabled: value[8],
                vestingPeriod: Number(value[9].toString()),
                percentPerPeriod: Number(value[10].toString()),
                getLastTxList: value[11].map((tx) => ({ tokenAmount: tx.tokenAmount.toString(), buyer: tx.buyer.toString()})),
                reachedHardCap: value[12],
                tokenBalanceOfContract: value[13].toString(),
                getLeftTimeAmount: Number(value[14].toString()),
            };

            dispatch(fetchPrivateSaleSuccess({data}));
        }).catch((error: Error) => {
            dispatch(fetchPrivateSaleError({error}));
        });
    } catch (error) {
        console.error(error);
        dispatch(fetchPrivateSaleError({error: error as Error}));
    }
}


export const fetchPrivateSaleAccountThunk = (privateSaleContract: IPrivateSaleContract, account: string) => async (dispatch: Dispatch) => {
    dispatch(fetchPrivateSale());
    try {
        Promise.all([
            privateSaleContract.deposits(account),
            privateSaleContract.userAmounts(account),
            privateSaleContract.whitelist(account),
            privateSaleContract.claimableByAddressAtTime(account, Math.floor(new Date().getTime() / 1000)),
        ]).then((value) => {
            const data: Partial<IPrivateSaleData> = {
                deposits: value[0].toString(),
                userAmounts: { totalTokens: value[1].totalTokens.toString(), claimed: value[1].claimed.toString() },
                whitelist: value[2],
                claimableByAddressAtTime: value[3].toString(),
                withAccountStateStatus: Status.SUCCESS
            };

            dispatch(fetchPrivateSaleSuccess({data}));
        }).catch((error: Error) => {
            dispatch(fetchPrivateSaleError({error}));
        });
    } catch (error) {
        console.error(error);
        dispatch(fetchPrivateSaleError({error: error as Error}));
    }
}

import {Dispatch} from "@reduxjs/toolkit";
import {ITokenData} from "./interfaces/data.interface";
import {simpleRpcProvider} from "../../utils/providers";
import {connectionConfig} from "../../config/constants";
import {fetchToken, fetchTokenError, fetchTokenSuccess} from "./actions";
import {ITokenContract} from "./interfaces/contract.interface";


export const fetchTokenThunk = (tokenContract: ITokenContract, account: string) => async (dispatch: Dispatch) => {
    dispatch(fetchToken());
    try {
        Promise.all([
            tokenContract.balanceOf(account),
            tokenContract.symbol(),
            tokenContract.name(),
            tokenContract.decimals(),
            simpleRpcProvider.getBalance(account),
            tokenContract.allowance(account, connectionConfig.privateSale.address),
            // BitrueApiService.getPrice('XSPUSDT')
        ]).then((value) => {
            const tokenData: ITokenData = {
                balance: value[0].toString(),
                symbol: value[1],
                name: value[2],
                networkBalance: value[4].toString(),
                decimals: Number(value[3].toString()),
                allowance: value[5].toString(),
                // price: value[6]
                price: -1
            };

            dispatch(fetchTokenSuccess({tokenData}));
        }).catch((error: Error) => {
            dispatch(fetchTokenError({error}));
        });
    } catch (error) {
        console.error(error);
        dispatch(fetchTokenError({error: error as Error}));
    }
}

//
//
// export const fetchStakingThunk = (stakingContract: IStakingContract, account: string) => async (dispatch: Dispatch) => {
//     dispatch(fetchStaking());
//     try {
//         Promise.all([
//             new Promise<{stakingInfoResp: IStakingInfoResp; rewards: BigNumber[]}>((resolve, reject) => {
//                 stakingContract.usersStaking(account).then(
//                   (stakingInfoResp: IStakingInfoResp) => {
//                       stakingContract.getActualNftReward(stakingInfoResp.usdtAmountForReward.toString()).then(
//                         (rewards: BigNumber[])=> {
//                             resolve({stakingInfoResp, rewards});
//                         },
//                         (error: any) => {
//                             reject(error);
//                         })
//                   },
//                   (error: any) => {
//                       reject(error);
//                   })
//             }),
//             stakingContract.getAllInvestors()
//         ]).then((value) => {
//             console.log(value, '------');
//             const stakingData: IStakingData = {
//                 stakingInfo: {
//                     rewardUnblockTimestamp: value[0].stakingInfoResp.rewardUnblockTimestamp.toNumber(),
//                     usdtAmountForReward: value[0].stakingInfoResp.usdtAmountForReward.toString(),
//                     tokenAmount: value[0].stakingInfoResp.tokenAmount.toString(),
//                     periodInWeeks: value[0].stakingInfoResp.periodInWeeks.toNumber(),
//                 },
//                 // rewards: value[0].rewards.map((reward: BigNumber) => reward.toNumber())
//                 rewards: value[0].rewards.map((v: BigNumber) => v.toNumber()),
//                 top10: value[1].map(v => ({account: v.account, multipliedValue: v.multipliedValue.toString()}))
//                   .sort((a: Rank, b: Rank) => BigNumber.from(a.multipliedValue).gt(b.multipliedValue) ? -1 : 1)
//                   .slice(0,10)
//                   .map(v => ({
//                       ...v,
//                       multipliedValue: `${formatUnits(v.multipliedValue, 18).split('.')[0]} $`
//                   }))
//             };
//             dispatch(fetchStakingSuccess({stakingData}));
//         }).catch((error: Error) => {
//             dispatch(fetchStakingError({error}));
//         });
//     } catch (error) {
//         console.error(error);
//         dispatch(fetchStakingError({error: error as Error}));
//     }
// }

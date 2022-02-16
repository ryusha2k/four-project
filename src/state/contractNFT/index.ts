import {Dispatch} from "@reduxjs/toolkit";
import {simpleRpcProvider} from "../../utils/providers";
import {
    fetchNFT,
    fetchNFTError,
    fetchNFTOwners,
    fetchNFTSuccess, fetchProgress,
    prefetchNFT,
    prefetchNFTError,
    prefetchNFTSuccess
} from "./actions";
import {INFTContract, PrefetchMethods, WithAccountMethods} from "./interfaces/contract.interface";
import {INFTData, INFTOwner} from "./interfaces/data.interface";


export const prefetchNFTThunk = (nftContract: INFTContract) => async (dispatch: Dispatch) => {
    dispatch(prefetchNFT());
    try {
        Promise.all(
          PrefetchMethods.map(
            (method) => (nftContract[method]()))
        ).then((value) => {
            const nftData: Partial<INFTData> = {
                mintLimit: Number(value[0].toString()),
                price: value[1].toString(),
                mintActive: value[2],
                symbol: value[3],
                name: value[4],
                totalSupply: Number(value[5].toString())
            };
            console.log(nftData);

            dispatch(prefetchNFTSuccess({nftData}));
        }).catch((error: Error) => {
            dispatch(prefetchNFTError({error}));
        });
    } catch (error) {
        console.error(error);
        dispatch(prefetchNFTError({error: error as Error}));
    }
}

export const fetchNFTWithAccountThunk = (nftContract: INFTContract, account: string) => async (dispatch: Dispatch) => {
    dispatch(fetchNFT());
    try {
        Promise.all([
            ...WithAccountMethods.map((method) => (nftContract[method](account))),
            simpleRpcProvider.getBalance(account),
        ]).then((value) => {
            const nftData: Partial<INFTData> = {
                inWhitelist: value[0],
                addressMinted: value[1],
                partnerMintAvailableBy: Number(value[2].toString()),
                balance: Number(value[3].toString()),
                networkBalance: value[4].toString()
            };

            console.log(nftData);
            dispatch(fetchNFTSuccess({nftData}));
        }).catch((error: Error) => {
            dispatch(fetchNFTError({error}));
        });
    } catch (error) {
        console.error(error);
        dispatch(fetchNFTError({error: error as Error}));
    }
}

async function fetchFromTo(nftContract: INFTContract, from: number, to: number, cb: (amount: number) => void): Promise<string[]> {
    const tokenIds = [];
    for (let i = from; i <= to; i++) {
        tokenIds.push(i.toString())
    }
    const response = await Promise.all(tokenIds.map(id => nftContract.ownerOf(id)))
    await new Promise(r => setTimeout(r, 100));
    cb(to);
    if (to < 10000) {
        const extra = await fetchFromTo(nftContract, from + 500, to + 500, cb);
        return [...response, ...extra];
    }
    return response;
}

export const fetchNFTOwnersThunk = (nftContract: INFTContract) => async (dispatch: Dispatch) => {
    const cb = (progressAmount: number) => {
        dispatch(fetchProgress(progressAmount));
    }
    const list = await fetchFromTo(nftContract, 1, 500, cb)
    const index: { [key: string]: number } = {};
    const res: INFTOwner[] = [];

    list.forEach((address: string) => {
        if (index[address] || index[address] === 0) {
            res[index[address]].balance++;
        } else {
            index[address] = res.length;
            res.push({
                address,
                balance: 1
            })
        }
    })

    dispatch(fetchNFTOwners(res.sort((a,b) => a.balance > b.balance ? -1 : a.balance === b.balance ? 0 : 1)));
}

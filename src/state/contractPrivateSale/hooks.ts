import { useSelector } from "react-redux";
import { parseUnits } from "ethers/lib/utils";
import { useMemo } from "react";
import { IPrivateSaleState, IPrivateSaleStateFormatted } from "./interfaces/data.interface";
import { State } from "../types";
import {Status} from "../../interfaces/statuses";

export const usePrivateSaleState = (): IPrivateSaleState => {
    return useSelector((state: State) => state.contractPrivateSale);
}

export const usePrivateSaleStateStatus = (): Status => {
    return useSelector((state: State) => state.contractPrivateSale.stateStatus);
}

export const usePrivateSaleWithAccountStateStatus = (): Status => {
    return useSelector((state: State) => state.contractPrivateSale.withAccountStateStatus);
}

export const usePrivateSaleStateFormatted = () => {
    const privateSaleState = usePrivateSaleState();
    return useMemo<IPrivateSaleStateFormatted>(() => {
        return {
            ...privateSaleState,
            hardCapEthAmount: parseUnits(privateSaleState.hardCapEthAmount),
            totalDepositedEthBalance: parseUnits(privateSaleState.totalDepositedEthBalance),
            minimumDepositEthAmount: parseUnits(privateSaleState.minimumDepositEthAmount),
            maximumDepositEthAmount: parseUnits(privateSaleState.maximumDepositEthAmount),
            getLastTxList: privateSaleState.getLastTxList.map((tx) => ({ ...tx, tokenAmount: parseUnits(tx.tokenAmount)})),
            tokenBalanceOfContract: parseUnits(privateSaleState.tokenBalanceOfContract),
            deposits: parseUnits(privateSaleState.deposits),
            userAmounts: {
                totalTokens: parseUnits(privateSaleState.userAmounts.totalTokens),
                claimed: parseUnits(privateSaleState.userAmounts.claimed)
            },
            claimableByAddressAtTime: parseUnits(privateSaleState.claimableByAddressAtTime),
        };
    }, [privateSaleState]);
}

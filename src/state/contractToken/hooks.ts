import { useSelector } from "react-redux";
import { parseUnits } from "ethers/lib/utils";
import { useMemo} from "react";
import { State } from "../types";
import { Status } from "../../interfaces/statuses";
import {ITokenState, ITokenStateFormatted} from "./interfaces/data.interface";


export const useTokenState = (): ITokenState => {
    return useSelector((state: State) => state.contractToken);
}

export const useTokenDecimalsState = (): number => {
    return useSelector((state: State) => state.contractToken.decimals);
}



export const useTokenStateFormatted = () => {
    const tokenState = useTokenState();
    return useMemo<ITokenStateFormatted>(() => {
        return {
            ...tokenState,
            networkBalance: parseUnits(tokenState.networkBalance, 18 - tokenState.decimals),
            balance: parseUnits(tokenState.balance, 18 - tokenState.decimals),
            allowance: parseUnits(tokenState.allowance, 18 - tokenState.decimals),
        };
    }, [tokenState]);
}

export const useTokenStateStatus = (): Status => {
    return useSelector((state: State) => state.contractToken.stateStatus);
}



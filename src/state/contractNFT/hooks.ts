import { useSelector } from "react-redux";
import { useMemo} from "react";
import {parseUnits} from "ethers/lib/utils";
import { State } from "../types";
import { Status } from "../../interfaces/statuses";
import { INFTOwner, INFTState, INFTStateFormatted } from "./interfaces/data.interface";


export const useNFTState = (): INFTState => {
    return useSelector((state: State) => state.contractNFT);
}

export const useNFTStateFormatted = () => {
    const nftState = useNFTState();
    return useMemo<INFTStateFormatted>(() => {
        return {
            ...nftState,
            price: parseUnits(nftState.price),
            networkBalance: parseUnits(nftState.networkBalance)
        };
    }, [nftState]);
}

export const useNFTStateStatus = (): Status => {
    return useSelector((state: State) => state.contractNFT.stateStatus);
}

export const useNFTPrefetchStateStatus = (): Status => {
    return useSelector((state: State) => state.contractNFT.prefetchStatus);
}


export const useNFTOwnersList = (): INFTOwner[] => {
    return useSelector((state: State) => state.contractNFT.owners);
}

export const useNFTProgress = (): number => {
    return useSelector((state: State) => state.contractNFT.progress);
}



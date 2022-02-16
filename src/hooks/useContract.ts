import { useMemo } from "react";
import { Contract } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import useActiveWeb3React from "./useActiveWeb3React";
import {getNFTContract, getPrivateSaleContract, getTokenContract} from "../utils/contract";
import useDebounce from "./useDebounce";
import {IPrivateSaleContract} from "../state/contractPrivateSale/interfaces/contract.interface";
import {ITokenContract} from "../state/contractToken/interfaces/contract.interface";
import {INFTContract} from "../state/contractNFT/interfaces/contract.interface";


export function useTokenContract(): ITokenContract | null {
    return useContract<ITokenContract>(getTokenContract);
}

export function usePrivateSaleContract(): IPrivateSaleContract | null {
  return useContract<IPrivateSaleContract>(getPrivateSaleContract)
}

export function useNftContract(): INFTContract | null {
  return useContract<INFTContract>(getNFTContract)
}

export function useContract<T = Contract>(getContractFunction: (library: Web3Provider, account?: string) => T): T | null {
    const {account, chainId, library} = useActiveWeb3React();

    return useDebounce(
        useMemo((): T | null => {
                if (!library || !chainId) {
                    return null;
                }

                const contract: T | null = getContractFunction(library, account || undefined);
                if (!contract) {
                    return null;
                }

                return contract;

            }, [getContractFunction, account, chainId, library]
        ),
        100);
}

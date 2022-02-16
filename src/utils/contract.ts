import { Web3Provider, JsonRpcSigner } from "@ethersproject/providers";
import { Contract } from "ethers";
import { AddressZero } from '@ethersproject/constants'
import { isAddress } from "ethers/lib/utils";
import { connectionConfig } from "../config/constants";
import {IPrivateSaleContract} from "../state/contractPrivateSale/interfaces/contract.interface";
import {ITokenContract} from "../state/contractToken/interfaces/contract.interface";
import {INFTContract} from "../state/contractNFT/interfaces/contract.interface";

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
    return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
    return account ? getSigner(library, account) : library
}

export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`)
    }

    return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

export function getTokenContract(library: Web3Provider, account?: string): ITokenContract {
    return getContract(connectionConfig.token.address, connectionConfig.token.abi, library, account) as ITokenContract;
}

export function getNFTContract(library: Web3Provider, account?: string): INFTContract {
    return getContract(connectionConfig.nft.address, connectionConfig.nft.abi, library, account) as INFTContract;
}

export function getPrivateSaleContract(library: Web3Provider, account?: string): IPrivateSaleContract {
    return getContract(connectionConfig.privateSale.address, connectionConfig.privateSale.abi, library, account) as IPrivateSaleContract;
}

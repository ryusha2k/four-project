export enum ChainId {
    BSC_TEST = 97,
    BSC_PROD = 56,
    ETH_RINKEBY = 4,
    ETH_ROPSTEN = 3,
    ETH_PROD = 1,
    XDC_TEST = 51,
    XDC_PROD = 50
}

export const enum ENetworkType {
    test,
    prod
}

export interface INetworkConfig {
    rpcUrls: string[];
    blockExplorerUrls: string[];
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    },
}

export interface IContract {
    address: string;
    abi: any;
}

export interface IConnectionConfig extends INetworkConfig {
    chainId: number;
    token: IContract;
    privateSale: IContract;
    nft: IContract;
}

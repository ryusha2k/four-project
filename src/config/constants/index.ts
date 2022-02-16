import { parseInt } from "lodash";
import { ChainId, ENetworkType, IConnectionConfig, INetworkConfig } from "../../interfaces/connection-config.interface";
import { networksConfig } from "./networks";
import { getNetworkType } from "../../utils/networks";
import { abi as saleAbiTest } from './private-sale_test.json';
import { abi as saleAbiProd } from './private-sale_prod.json';
import { abi as tokenAbiTest } from './token_test.json';
import { abi as tokenAbiProd } from './token_prod.json';
import { abi as nftAbiProd } from './nft_prod.json';
import { abi as nftAbiTest } from './nft_test.json';

export const INSPECTOR = '0x8B30B72D00D1C832Ac599e51aE86032bAd8D0A88';
// export const INSPECTOR = '0xb0462911f2d4B5993000C493F5C261Bd55303664';
export const MAX_UINT256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

export const BLOCKED_ADDRESSES: string[] = [
    '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
    '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
    '0x901bb9583b24D97e995513C6778dc6888AB6870e',
    '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
    '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
]

export const FAST_INTERVAL = 1500;
export const SLOW_INTERVAL = 3000;

export const connectorLocalStorageKey = 'connectorId';
export const walletLocalStorageKey = 'wallet';
export const isDarkLocalStorageKey = 'isDark';

const TOKEN_CONTRACT_ADDRESS: { [key in ENetworkType]: string } = {
    [ENetworkType.prod]: '',
    [ENetworkType.test]: '0x107715A355AFa7bFC3e18196ba007D8023980586'
};

const PRIVATE_SALE_CONTRACT_ADDRESS: { [key in ENetworkType]: string } = {
    [ENetworkType.prod]: '',
    [ENetworkType.test]: '0x67204941D0cAEB001b0FB70D10EF5aC44D463413'
};

const NFT_CONTRACT_ADDRESS: { [key in ENetworkType]: string } = {
    [ENetworkType.prod]: '0x14e0a1F310E2B7E321c91f58847e98b8C802f6eF',
    [ENetworkType.test]: '0x5514D4f9E11dC223ddc3a6D54B3c8dD32Db8bE89'
};

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID || '1') as ChainId;
const networkType = getNetworkType(chainId);
export const networkConfig: INetworkConfig = networksConfig[chainId];
export const connectionConfig: IConnectionConfig = ({
    ...networkConfig,
    token: {
        address: TOKEN_CONTRACT_ADDRESS[networkType],
        abi: networkType === ENetworkType.prod ? tokenAbiProd : tokenAbiTest
    },
    privateSale: {
        address: PRIVATE_SALE_CONTRACT_ADDRESS[networkType],
        abi: networkType === ENetworkType.prod ? saleAbiProd : saleAbiTest
    },
    nft: {
        address: NFT_CONTRACT_ADDRESS[networkType],
        abi: networkType === ENetworkType.prod ? nftAbiProd : nftAbiTest
    },
    chainId
})


export const getRandomRpcUrl = (): string => {
    return networkConfig.rpcUrls[0];
}

export const WEEK_IN_SECONDS = 604800;

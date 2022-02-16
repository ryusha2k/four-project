import { ChainId, ENetworkType } from "../interfaces/connection-config.interface";

const prodIds: { [key in ChainId]?: boolean } = {
    [ChainId.BSC_PROD]: true,
    [ChainId.XDC_PROD]: true,
    [ChainId.ETH_PROD]: true,
}
export const getNetworkType = (chainId: ChainId): ENetworkType => {
    return prodIds[chainId] ? ENetworkType.prod : ENetworkType.test;
}

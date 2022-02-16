import { connectionConfig, networkConfig } from "../config/constants";

export const setupNetwork = async () => {
    const provider = window.ethereum;
    if (provider && provider.request) {
        try {
            const a = await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: `0x${connectionConfig.chainId.toString(16)}`
                }],
            });
            console.log(a);
            return true;
        } catch (e: any) {
            if (e.code === 4902) {
                const params = [{
                    ...networkConfig,
                    chainId: `0x${connectionConfig.chainId.toString(16)}`,
                }];
                try {
                    await provider.request({
                        method: 'wallet_addEthereumChain',
                        params,
                    });
                    return true;
                } catch (addError) {
                    console.error('Failed to setup the network in Metamask', e);
                    return false;
                }
            }
            console.error('Failed to setup the network in Metamask', e);
            return false;
        }
    } else {
        console.error('Can\'t setup the network on metamask because window.ethereum is undefined');
        return false;
    }
}


/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
    let tokenAdded;
    if (window.ethereum) {
        tokenAdded = await window.ethereum.request?.({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    image: `/images/tokens/${tokenAddress}.png`,
                },
            },
        });
    }


    return tokenAdded;
}

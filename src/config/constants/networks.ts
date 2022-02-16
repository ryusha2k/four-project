import { ChainId, INetworkConfig } from "../../interfaces/connection-config.interface";

export const networksConfig: { [key in ChainId]: INetworkConfig } = {
    [ChainId.BSC_TEST]: {
        rpcUrls: [
            'https://data-seed-prebsc-1-s1.binance.org:8545/',
            'https://data-seed-prebsc-1-s2.binance.org:8545/',
        ],
        blockExplorerUrls: [
            'https://testnet.bscscan.com'
        ],
        chainName: 'BSC - Testnet',
        nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
        },
    },
    [ChainId.BSC_PROD]: {
        rpcUrls: [
            'https://bsc-dataseed.binance.org/',
            'https://bsc-dataseed1.defibit.io/',
            'https://bsc-dataseed1.ninicoin.io/',
        ],
        blockExplorerUrls: [
            'https://bscscan.com',
        ],
        chainName: 'Binance Smart Chain',
        nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
        },
    },
    [ChainId.ETH_RINKEBY]: {
        rpcUrls: [
            // 'https://rinkeby.infura.io/v3/a1813bc99a3548a8a5479c9ff111afcf',
          'https://eth-rinkeby.alchemyapi.io/v2/Q1dnW-ndzGZLF2C1S2N6tJlRI1GN82CS'
        ],
        blockExplorerUrls: [
            'https://rinkeby.etherscan.io',
        ],
        chainName: 'Ethereum Rinkeby Testnet',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
    },
    [ChainId.ETH_ROPSTEN]: {
        rpcUrls: [
            'https://ropsten.infura.io/v3/a1813bc99a3548a8a5479c9ff111afcf',
        ],
        blockExplorerUrls: [
            'https://ropsten.etherscan.io',
        ],
        chainName: 'Ethereum Ropsten Testnet',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
    },
    [ChainId.ETH_PROD]: {
        rpcUrls: [
            'https://eth-mainnet.alchemyapi.io/v2/oiUJxVgkLs6JMGjW9BvX7-Ha6e9nJj4t',
        ],
        blockExplorerUrls: [
            'https://etherscan.io',
        ],
        chainName: 'Ethereum Mainnet',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
    },
    [ChainId.XDC_TEST]: {
        rpcUrls: [
            'https://rpc.apothem.network',
        ],
        blockExplorerUrls: [
            'https://explorer.apothem.network',
        ],
        chainName: 'XinFin Apothem Testnet',
        nativeCurrency: {
            name: 'XDC',
            symbol: 'TXDC',
            decimals: 18,
        },
    },
    [ChainId.XDC_PROD]: {
        rpcUrls: [
            'https://rpc.xinfin.network',
        ],
        blockExplorerUrls: [
            'https://explorer.xinfin.network/',
        ],
        chainName: 'XinFin Network Mainnet',
        nativeCurrency: {
            name: 'XDC',
            symbol: 'XDC',
            decimals: 18,
        },
    }
}

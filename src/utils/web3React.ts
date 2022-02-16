import { ethers } from 'ethers';
import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers/src.ts/web3-provider";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { connectionConfig, getRandomRpcUrl } from "../config/constants";

export const enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect"
}

export const connectorNamesArray = [ConnectorNames.Injected, ConnectorNames.WalletConnect];

const POLLING_INTERVAL = 12000;


const injected = new InjectedConnector({
    supportedChainIds: [connectionConfig.chainId]
});

const walletConnect = new WalletConnectConnector({
    rpc: {[connectionConfig.chainId]: getRandomRpcUrl()},
    supportedChainIds: [connectionConfig.chainId],
    qrcode: true,
    chainId: connectionConfig.chainId
});

export interface WalletInfo {
    connector?: AbstractConnector
    name: string
    iconName: string
    description: string
    href: string | null
    color: string
    primary?: true
    mobile?: true
    mobileOnly?: true
}

export const walletsByName: { [connectorName in ConnectorNames]: WalletInfo } = {
    [ConnectorNames.Injected]: {
        connector: injected,
        name: 'MetaMask',
        iconName: 'metamask.svg',
        description: 'Easy-to-use browser extension.',
        href: connectionConfig.blockExplorerUrls[0],
        color: '#E8831D'
    },
    [ConnectorNames.WalletConnect]: {
        connector: walletConnect,
        name: 'WalletConnect',
        iconName: 'walletConnect.svg',
        description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
        href: null,
        color: '#4196FC',
        mobile: true
    }
}


export const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc): ethers.providers.Web3Provider => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
}

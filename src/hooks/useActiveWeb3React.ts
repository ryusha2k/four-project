// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useRef, useState } from 'react'
import { simpleRpcProvider } from '../utils/providers'
import { connectionConfig } from "../config/constants";

const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
    const {library, chainId, ...web3React} = useWeb3React()

    const refEth = useRef(library)

    const [provider, setProvider] = useState(library || simpleRpcProvider)

    useEffect(() => {
        if (library !== refEth.current) {
            setProvider(library || simpleRpcProvider)
            refEth.current = library
        }
    }, [library]);

    return {library: provider, chainId: chainId ?? connectionConfig.chainId, ...web3React}
}
export default useActiveWeb3React;

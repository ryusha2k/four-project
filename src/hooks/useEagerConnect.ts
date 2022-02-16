import { useEffect } from "react";
import useAuth from "./useAuth";
import { ConnectorNames } from "../utils/web3React";
import { connectorLocalStorageKey } from "../config/constants";

const useEagerConnect = () => {
    const {login} = useAuth();

    useEffect(() => {
        const connectorId = JSON.parse(window.localStorage.getItem(connectorLocalStorageKey) || 'false') as ConnectorNames;
        if (connectorId) {
            login(connectorId);
        }
    }, [login]);
}

export default useEagerConnect;

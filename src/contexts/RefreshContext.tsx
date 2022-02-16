import React, { createContext, useEffect, useRef, useState } from "react";
import { FAST_INTERVAL, SLOW_INTERVAL } from "../config/constants";

interface IRefresh {
    slow: number;
    fast: number;
}

const RefreshContext = createContext<IRefresh>({slow: 0, fast: 0});

const useIsBrowserTabActive = () => {
    const isBrowserTabActiveRef = useRef<boolean>();

    useEffect(() => {
        const onVisibilityChange = () => {
            isBrowserTabActiveRef.current = !document.hidden;
        }
        window.addEventListener('visibilitychange', onVisibilityChange);
        return () => {
            window.removeEventListener('visibilitychange', onVisibilityChange);
        };
    }, []);

    return isBrowserTabActiveRef;
}


const RefreshContextProvider: React.FC = ({children}) => {
    const [slow, setSlow] = useState(0);
    const [fast, setFast] = useState(0);
    const isBrowserTabActiveRef = useIsBrowserTabActive();

    useEffect(() => {
        const interval = setInterval(async () => {
            if (isBrowserTabActiveRef.current) {
                setSlow((prev) => prev + 1);
            }
        }, SLOW_INTERVAL);
        return () => clearInterval(interval);
    }, [isBrowserTabActiveRef]);

    useEffect(() => {
        const interval = setInterval(async () => {
            if (isBrowserTabActiveRef.current) {
                setFast((prev) => prev + 1);
            }
        }, FAST_INTERVAL);
        return () => clearInterval(interval);
    }, [isBrowserTabActiveRef]);

    return <RefreshContext.Provider value={{slow, fast}}>{children}</RefreshContext.Provider>
}


export { RefreshContext, RefreshContextProvider }

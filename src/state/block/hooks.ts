import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../index";
import useIsWindowVisible from "../../hooks/useIsWindowVisible";
import { simpleRpcProvider } from "../../utils/providers";
import { setBlock } from "./index";
import { State } from "../types";

export const usePollBlockNumber = () => {
    const timer = useRef<any>(null);
    const dispatch = useAppDispatch();
    const isWindowVisible = useIsWindowVisible();

    useEffect(() => {
        if (isWindowVisible) {
            timer.current = setInterval(async () => {
                const blockNumber = await simpleRpcProvider.getBlockNumber();
                dispatch(setBlock(blockNumber));
            }, 6000);
        } else {
            clearInterval(timer.current);
        }
        return () => clearInterval(timer.current);
    }, [dispatch, timer, isWindowVisible]);
}


export const useBlock = () => {
    return useSelector((state: State) => state.block);
}

export const useInitialBlock = () => {
    return useSelector((state: State) => state.block.initialBlock);
}

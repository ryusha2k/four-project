import { useSelector } from "react-redux";
import { State } from "../types";

export const useUser = () => {
    return useSelector((state: State) => state.profile);
}

export const useInitialBlock = () => {
    return useSelector((state: State) => state.block.initialBlock);
}

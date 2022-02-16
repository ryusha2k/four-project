import {ITokenState} from "./contractToken/interfaces/data.interface";
import {IPrivateSaleState} from "./contractPrivateSale/interfaces/data.interface";
import {INFTState} from "./contractNFT/interfaces/data.interface";

export interface BlockState {
    currentBlock: number;
    initialBlock: number;
}

// Profile
export interface ProfileState {
    isInitialized: boolean;
    isLoading: boolean;
    hasRegistered: boolean;
}

// User
export interface UserState {
    isDark: boolean;
}

// Global state
export interface State {
    block: BlockState;
    profile: ProfileState;
    user: UserState;
    contractToken: ITokenState;
    contractPrivateSale: IPrivateSaleState;
    contractNFT: INFTState;
}



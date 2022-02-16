import { Status } from "./statuses";

export interface ICommonState {
    stateStatus: Status;
    prefetchStatus: Status;
    error: Error | null;
}

export const initialCommonState: ICommonState = {
    stateStatus: Status.INITIAL,
    prefetchStatus: Status.INITIAL,
    error: null
}

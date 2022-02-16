import { useEffect } from "react";
import {useNftContract} from "./useContract";
import {useNFTPrefetchStateStatus} from "../state/contractNFT/hooks";
import {useAppDispatch} from "../state";
import { prefetchNFTThunk } from "../state/contractNFT";
import {Status} from "../interfaces/statuses";


const useEagerFetchData = () => {
    const nftContract = useNftContract();
    const nftPrefetchStateStatus = useNFTPrefetchStateStatus();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (nftPrefetchStateStatus === Status.INITIAL && nftContract) {
            console.log(123);
            dispatch(prefetchNFTThunk(nftContract));
            // dispatch(fetchNFTOwnersThunk(nftContract));
        }
    }, [nftPrefetchStateStatus, nftContract, dispatch])
}

export default useEagerFetchData;

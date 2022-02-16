import { TransactionReceipt } from "@ethersproject/abstract-provider";
import { Web3Provider } from "@ethersproject/providers";

export const txPending = async (hash: string, library: Web3Provider): Promise<TransactionReceipt> => {
    return new Promise((resolve, reject) => {
        const interval = setInterval(async () => {
            try {
                const receipt = await library.getTransactionReceipt(hash);
                if (receipt) {
                    if (receipt.status) {
                        clearInterval(interval);
                        resolve(receipt);
                    } else {
                        clearInterval(interval);
                        reject(receipt);
                    }
                }
            } catch (e) {
                clearInterval(interval);
                reject(e);
            }
        }, 2000);
    })
}

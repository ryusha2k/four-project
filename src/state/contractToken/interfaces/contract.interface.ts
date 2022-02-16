import { BigNumber, Contract } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";

export interface ITokenContract extends Contract {
  // write
  readonly approve: (spender: string, amount: string) => Promise<TransactionResponse>,

  // read
  readonly symbol: () => Promise<string>,
  readonly name: () => Promise<string>,
  readonly decimals: () => Promise<BigNumber>,

  readonly balanceOf: (account: string) => Promise<BigNumber>,
  readonly allowance: (owner: string, spender: string) => Promise<BigNumber>,

  // only owner

}

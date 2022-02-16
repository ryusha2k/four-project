import {BigNumber} from "ethers";
import {ICommonState} from "../../../interfaces/common-state.interface";
import { LastTxResp, UserAmountsResp } from "./contract.interface";
import { Status } from "../../../interfaces/statuses";

interface UserAmounts {
  totalTokens: string;
  claimed: string;
}

export const initialUserAmounts: UserAmounts = {
  totalTokens: '0',
  claimed: '0'
}

interface LastTx {
  tokenAmount: string;
  buyer: string;
}

export interface IPrivateSaleData {
  privateSaleStartTimestamp: number;
  privateSaleEndTimestamp: number;
  hardCapEthAmount: string;
  totalDepositedEthBalance: string;
  minimumDepositEthAmount: string;
  maximumDepositEthAmount: string;
  tokenPerBNB: number;
  claimEnabledStart: number;
  whitelistEnabled: boolean;
  vestingPeriod: number;
  percentPerPeriod: number;
  getLastTxList: LastTx[];
  reachedHardCap: boolean;
  tokenBalanceOfContract: string;
  getLeftTimeAmount: number;
  // with account
  deposits: string;
  userAmounts: UserAmounts;
  whitelist: boolean;
  claimableByAddressAtTime: string;
  withAccountStateStatus: Status;
}

export interface IPrivateSaleDataFormatted extends Omit<
  IPrivateSaleData,
  'hardCapEthAmount' |
  'totalDepositedEthBalance' |
  'minimumDepositEthAmount' |
  'maximumDepositEthAmount' |
  'getLastTxList' |
  'tokenBalanceOfContract' |
  'deposits' |
  'userAmounts' |
  'claimableByAddressAtTime'
  > {
  hardCapEthAmount: BigNumber;
  totalDepositedEthBalance: BigNumber;
  minimumDepositEthAmount: BigNumber;
  maximumDepositEthAmount: BigNumber;
  getLastTxList: LastTxResp[];
  tokenBalanceOfContract: BigNumber;
  deposits: BigNumber;
  userAmounts: UserAmountsResp;
  claimableByAddressAtTime: BigNumber;
}

export type IPrivateSaleState = ICommonState & IPrivateSaleData;
export type IPrivateSaleStateFormatted = ICommonState & IPrivateSaleDataFormatted;

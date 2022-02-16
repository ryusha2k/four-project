import {BigNumber} from "ethers";
import {ICommonState} from "../../../interfaces/common-state.interface";

export interface ITokenData {
  networkBalance: string;
  balance: string;
  allowance: string;
  symbol: string;
  name: string;
  decimals: number;
  price: number;
}

export interface ITokenDataFormatted extends Omit<ITokenData, 'balance' | 'allowance' | 'networkBalance'> {
  networkBalance: BigNumber;
  balance: BigNumber;
  allowance: BigNumber;
}

export type ITokenState = ICommonState & ITokenData;
export type ITokenStateFormatted = ICommonState & ITokenDataFormatted;

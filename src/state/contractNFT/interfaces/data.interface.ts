import {BigNumber} from "ethers";
import {ICommonState} from "../../../interfaces/common-state.interface";

export interface INFTOwner {
  address: string;
  balance: number;
}
export interface INFTData {
  balance: number;
  networkBalance: string;
  symbol: string;
  name: string;
  totalSupply: number;
  price: string;
  mintLimit: number;
  mintActive: boolean;
  inWhitelist: boolean;
  addressMinted: boolean;
  partnerMintAvailableBy: number;
  owners: INFTOwner[];
  progress: number;
}

export interface INFTDataFormatted extends Omit<INFTData, 'price' | 'networkBalance'> {
  price: BigNumber;
  networkBalance: BigNumber
}

export type INFTState = ICommonState & INFTData;
export type INFTStateFormatted = ICommonState & INFTDataFormatted;

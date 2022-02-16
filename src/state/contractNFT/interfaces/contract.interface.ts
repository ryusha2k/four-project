import { BigNumber, Contract } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";

export interface INFTContract extends Contract {
  // read without account
  readonly mintLimit: () => Promise<BigNumber>;
  readonly mintPrice: () => Promise<BigNumber>;
  readonly reveal: () => Promise<boolean>;
  readonly mintActive: () => Promise<boolean>;
  readonly partnerMintAmount: () => Promise<BigNumber>;
  readonly symbol: () => Promise<string>;
  readonly name: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;

  // read with account
  readonly whitelist: (account: string) => Promise<boolean>;
  readonly addressMinted: (account: string) => Promise<boolean>;
  readonly partnerMintAvailableBy: (account: string) => Promise<BigNumber>;
  readonly balanceOf: (account: string) => Promise<BigNumber>;
  readonly ownerOf: (tokenId: string) => Promise<string>;

  // write
  readonly mintNFT: (numOfTokens: number, signature: string, price: {value: string}) => Promise<TransactionResponse>;
  readonly partnersMintMultiple: (mintTo: string[]) => Promise<TransactionResponse>;
}

export const PrefetchMethods: string[] = [
  "mintLimit", "mintPrice", "mintActive", "symbol", "name", "totalSupply"
]

export const WithAccountMethods: string[] = [
  "whitelist", "addressMinted", "partnerMintAvailableBy", "balanceOf"
]

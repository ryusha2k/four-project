import {BigNumber, Contract} from "ethers";


export interface UserAmountsResp {
  totalTokens: BigNumber;
  claimed: BigNumber;
}

export interface LastTxResp {
  tokenAmount: BigNumber;
  buyer: string;
}

export interface IPrivateSaleContract extends Contract {
  // write


  // eager read
  readonly privateSaleStartTimestamp: () => Promise<BigNumber>,
  readonly privateSaleEndTimestamp: () => Promise<BigNumber>,
  readonly hardCapEthAmount: () => Promise<BigNumber>,
  readonly totalDepositedEthBalance: () => Promise<BigNumber>,
  readonly minimumDepositEthAmount: () => Promise<BigNumber>,
  readonly maximumDepositEthAmount: () => Promise<BigNumber>,
  readonly tokenPerBNB: () => Promise<BigNumber>,
  readonly claimEnabledStart: () => Promise<BigNumber>, // timestamp
  readonly whitelistEnabled: () => Promise<boolean>,
  readonly vestingPeriod: () => Promise<BigNumber>,
  readonly percentPerPeriod: () => Promise<BigNumber>,
  readonly getLastTxList: () => Promise<LastTxResp[]>,
  readonly reachedHardCap: () => Promise<boolean>, // достигнут макчимум или нет
  readonly tokenBalanceOfContract: () => Promise<BigNumber>, // баланс контракта в CRT
  readonly getLeftTimeAmount: () => Promise<BigNumber>, // сколько осталось времени до конца продаж

  // read with account
  readonly deposits: (account: string) => Promise<BigNumber>, // wallet address
  readonly userAmounts: (account: string) => Promise<UserAmountsResp>,
  readonly whitelist: (account: string) => Promise<boolean>,
  readonly claimableByAddressAtTime: (account: string, time: number) => Promise<BigNumber>, // сколько токенов аккаунт может вывести в данный момент

  // only owner
}

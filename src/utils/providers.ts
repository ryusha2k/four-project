import { ethers } from 'ethers'
import { getRandomRpcUrl } from "../config/constants";

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(getRandomRpcUrl());

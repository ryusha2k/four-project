const multiplies = ['1.0x', '1.0x', '1.2x', '1.3x', '1.4x', '1.5x', '1.6x', '1.7x', '1.8x', '1.9x', '2x']
const tiers = [
    "Renegade",
    "Pirate",
    "Capo",
    "Guerillero",
    "Spartacus",
]
const usdtAmountForTier = [
  100,
  500,
  2500,
  10000,
  50000,
]
export const getMultiplier = (weeks: number): string => {
    const periods = weeks / 2;
    if (periods >= multiplies.length) {
        return multiplies[multiplies.length - 1];
    }
    return multiplies[periods];
}

const rewards = ['Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythical'];

export const getRewardName = (rewardIndex: number): string => {
    if (rewardIndex >= rewards.length) {
        return '';
    }
    return rewards[rewardIndex]
}

export const getAllRewards = (rewardAmountByIndex: number[]): string => {
    let res = '';
    let tempRes = '';
    rewardAmountByIndex.forEach((amount: number, index: number) => {
        if (amount > 0) {
            tempRes = amount > 1 ? `${amount} x ${getRewardName(index)}` : getRewardName(index);
            res = res ? `${res}, ${tempRes}` : tempRes;
        }
    });
    return res;
}

export const getTier = (usdtAmount: number): string => {
    if (usdtAmount < usdtAmountForTier[0]) {
        return "-"
    }
    for (let i = 1; i < usdtAmountForTier.length; i++) {
        if (usdtAmount < usdtAmountForTier[i]) {
            return tiers[i - 1]
        }
    }
    return tiers[tiers.length - 1];
}

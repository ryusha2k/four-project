import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { formatPrice } from "../../utils/customConverter";

interface Props {
    amount: BigNumber;
    symbol: string;
    afterDot?: number;
    sx?: SxProps<Theme>;
}

export const Balance = ({amount, symbol, afterDot = 3, sx}: Props) => {
    return (
        <Tooltip title={formatUnits(amount)} placement='top-start'>
            <Typography
                component='div'
                variant='h6'
                sx={{
                    display: 'flex',
                    cursor: 'pointer',
                    fontWeight: 500,
                    ...sx
                }}>
                {formatPrice(amount, afterDot)} {symbol}
            </Typography>
        </Tooltip>
    );
}

import { Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

interface ITextCopy {
    text: string
}

export const TextCopy = ({text}: ITextCopy) => {

    const [copied, setCopied] = useState<boolean>(false);

    return (
        <Tooltip title={copied ? 'Copied!' : 'Copy'} arrow placement='top'>
            <Typography
                unselectable='on'
                onClick={() => {
                    navigator.clipboard.writeText(text);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 1000);
                }}
                component='div' sx={{
                position: "relative",
                width: '100%',
                cursor: 'pointer',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                fontSize: 'inherit',
                userSelect: 'none'
            }}>
                {text}
            </Typography>
        </Tooltip>
    );
}

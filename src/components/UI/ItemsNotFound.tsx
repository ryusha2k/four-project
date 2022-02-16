import { Typography } from "@mui/material";
import React from "react";

interface Props {
    description: string;
}

export const ItemsNotFound = ({description}: Props) => {
    return (
        <Typography
            component='div'
            variant='body1'
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                py: 4,
                color: theme => theme.palette.secondary.dark
            }}>
            <Typography sx={{maxWidth: '500px'}}>
                {description}
            </Typography>

        </Typography>
    );
}

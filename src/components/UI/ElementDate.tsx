import { Typography } from "@mui/material";
import React from "react";
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

interface IDate {
    date: Date;
}

export const ElementDate = ({date}: IDate) => {
    return (
        <Typography
            component='div' sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'default',
            mr: 2,
            fontWeight: 500
        }}>
            <DateRangeOutlinedIcon fontSize='small' sx={{
                mr: 0.5,
                color: theme => theme.palette.secondary.dark
            }}/> {date.toLocaleDateString()}
        </Typography>
    );
}

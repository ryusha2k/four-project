import React from "react";
import { alpha, Box, Typography } from "@mui/material";

interface Props {
    color: string;
    order: number;
    title: string;
    description: string;
    price: number;
}

export const NumberedOption = ({color, order, title, description, price}: Props): React.ReactElement => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 200,
            pt: 5
        }}>
            <Box sx={{
                width: 30,
                height: 30,
                border: `2px solid ${alpha(color, 0.4)}`,
                borderRadius: '50%',
                p: 4,
                fontSize: '1.3rem',
                color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <span>{order}</span>
            </Box>
            <Box sx={{
                textAlign: 'center'
            }}>
                <Typography variant='h6' sx={{
                    mt: 2,
                    mb: 1
                }}>
                    {title}
                </Typography>
                <Typography component='div' variant='body1' sx={{
                    opacity: '.5'
                }}>
                    {description}
                </Typography>
                <Typography component='div' variant='body1' sx={{
                    opacity: '.8'
                }}>
                    Min: {price}$
                </Typography>

            </Box>
        </Box>
    );
}

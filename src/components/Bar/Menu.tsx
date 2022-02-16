import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { ExternalURLS, URLConfig, URLNames } from "../../config/paths";

export const Menu = () => {
    const theme = useTheme();
    const navLinkStyle = {
        display: 'flex',
        textDecoration: 'none',
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 600,
        marginRight: theme.spacing(1),
        marginLeft: 1,
        color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
        '&:hover': {
            color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        },
        '&[aria-current="page"]': {
            color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        }
    };
    return (
        <>
            <Box sx={{
                display: "flex"
            }}>
                {
                    ExternalURLS.map((key: URLNames) => {
                        const option = URLConfig[key];
                        return (
                            <Typography component='a'
                                        href={option.path}
                                        target={option.target ? option.target : '_blank'}
                                        key={key}
                                        sx={{...navLinkStyle}}
                            >
                                {option.title}
                            </Typography>
                        );
                    })
                }
                {
                    // InternalURLS.filter((key: URLNames) => {
                    //     const option = URLConfig[key];
                    //     return !(option.onlyOwner && account !== stakingState.owner);
                    // }).map((key: URLNames) => {
                    //     const option = URLConfig[key];
                    //     return (
                    //         <MyNavLink
                    //             to={option.path}
                    //             key={key}
                    //             sx={{...navLinkStyle}}
                    //         >
                    //             {option.title}
                    //         </MyNavLink>
                    //     );
                    // })
                }
            </Box>
        </>
    );
}

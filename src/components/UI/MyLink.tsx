import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import {Link} from "@mui/material";

export const MyLink = styled(Link)(({theme}) => ({
    display: 'flex',
    textDecoration: 'none',
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 600,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    '&:hover': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    }
}));

export const MyNavLink = styled(NavLink)(({theme}) => ({
    display: 'flex',
    textDecoration: 'none',
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 600,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main,
    '&:hover': {
        color: theme.palette.primary.light,
    },
    // '&[aria-current="page"]': {
    //     color: theme.palette.primary.light,
    // }
}));



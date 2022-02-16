import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(({theme}) => ({
    border: `2px solid ${theme.palette.primary.dark}`,
    backgroundColor: 'white',
    '& .MuiPaper-root': {
        height: 'auto',
        maxWidth: '400px'
    },
    '& .MuiCardContent-root': {
        padding: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    '& .MuiCardActions-root': {
        padding: theme.spacing(5),
        paddingTop: 0
    },
}));

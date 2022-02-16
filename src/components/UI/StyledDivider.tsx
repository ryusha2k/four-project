import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

export const StyledDivider = styled(Divider)(({theme}) => ({
    backgroundColor: theme.palette.primary.dark
}));

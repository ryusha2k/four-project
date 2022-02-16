import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

export const MyLoadingButton = styled(LoadingButton)(({theme}) => ({
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(1),
  backgroundImage: 'url(http://test2.renmustache.ru/images/smart_link_bg.svg)',
  backgroundColor: 'transparent',
  overflow: 'auto',
  height: 100,
  width: 200
  // color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
  // '&:hover': {
  //   color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  // }
}));

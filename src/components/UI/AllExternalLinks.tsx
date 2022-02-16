import React from "react";
import {Box, useTheme} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Twitter from '../../assets/images/links/twitter.svg';
import Instagram from '../../assets/images/links/instagram.svg';
import Opensea from '../../assets/images/links/opensea.svg';
import Etherscan from '../../assets/images/links/etherscan.svg';
import Discord from '../../assets/images/links/discord.svg';
import {MyLink} from "./MyLink";

const links: {path: string; icon: any}[] = [
  {
    path: 'https://discord.gg/HYPEBEARS',
    icon: Discord
  },
  {
    path: 'https://twitter.com/hypebearsclub',
    icon: Twitter
  },
  {
    path: 'https://etherscan.io/token/0x14e0a1F310E2B7E321c91f58847e98b8C802f6eF',
    icon: Etherscan
  },
  {
    path: 'https://opensea.io/collection/hype-bears-club-official-',
    icon: Opensea
  },
  {
    path: 'https://instagram.com/hypebearsclub',
    icon: Instagram
  }
]
interface Props {
  multi?: boolean;
  sx?: SxProps<Theme>;
}
export const AllExternalLinks = ({sx, multi}: Props) => {
  const theme = useTheme();
  return (
    <Box sx={{display: 'flex', flexWrap: multi ? 'wrap' : 'nowrap'}}>
      {links.map(
        (link) =>
          <MyLink key={link.path} href={link.path} target="_blank" sx={{
            width: 36,
            height: 36,
            backgroundColor: theme.palette.grey.A700,
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '.2s',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            ...sx
          }}>
            <img src={link.icon} alt={link.path.split('//')[1][0]}/>
          </MyLink>)
      }
    </Box>
  );
}

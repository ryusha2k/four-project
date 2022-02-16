import React from 'react';
import './Team.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardContent, useTheme } from '@mui/material';
import { ITeamCardProps } from "../../../interfaces/components.interface";
import { MyLink } from "../../../components/UI/MyLink";

export const TeamCard = ({ name, place, socials, index }: ITeamCardProps & { index: number }) => {
  const theme = useTheme();
  return (
    <Card elevation={0} sx={{maxWidth: 270, maxHeight: 351}}>
      <CardMedia
        component="img"
        height="270"
        image={`/images/team/${index}.png`}
        alt="test"
      />
      <CardContent sx={{
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

      }}>
        <Box sx={{textAlign: 'left', display: 'flex', flexDirection: 'column'}}>
          <Typography sx={{
            textTransform: 'uppercase',
            fontSize: 16,
            fontWeight: 700
          }}>
            {name}
          </Typography>
          <Typography sx={{
            textTransform: 'uppercase',
          }}>
            {place}
          </Typography>
        </Box>
        <Box sx={{ justifyContent: 'scape-between', display: 'flex'}}>
          {
            socials.map(social =>
              <MyLink
                key={social.link}
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: theme.palette.common.black,
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: '.2s',
                  '&:hover': {
                    backgroundColor: theme.palette.grey.A400,
                  }
                }}
                href={social.link}
                target="_blank" >
                <img src={social.img} alt=""/>
              </MyLink>
            )
          }
        </Box>


      </CardContent>

    </Card>
  );
}

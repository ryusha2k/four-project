import React from 'react';
import { Grid,  Typography, useTheme} from "@mui/material";

const cards : string[] = [
  '1',
  '2',
  '3',
  '4'
];


export const BearsVideo = () => {
  const theme = useTheme();
  return (
      <Grid container
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            sx={{
              height: '100%',
              [theme.breakpoints.down('sm')]: {

              },
            }}
      >
      {
        cards.map((name) =>
          <Typography component='img' src={`/images/cards/${name}.png`} sx={{
            minWidth: '200px',
            maxHeight: '60%',
            paddingTop: '30px',
          }}/>
        )
      }
    </Grid>
  );
}

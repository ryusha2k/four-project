import React from 'react';
import { Box, Typography } from "@mui/material";

const cards: string[] = [
  '1',
  '2',
  '3',
  '4'
];


export const BearsVideo = () => {
  return (
    <Box  sx={{
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexDirection: 'column'
    }}>
        {
          cards.map((name) =>
              <Typography component='img' src={`/images/cards/${name}.png`} sx={{
                height: 'auto',
                paddingTop: '50px',
                maxWidth: '300px',
                minHeight: '300px'
              }}/>
          )
        }
    </Box>

  );
}

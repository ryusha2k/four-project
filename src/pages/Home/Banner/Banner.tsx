import React from 'react';
import {Box, Typography, useTheme, Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Banner = () => {
  const theme = useTheme();
  return (
    <Grid container component="main" sx={{
      height: '130vh',
      backgroundImage: 'url("/images/banner.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>


      <Grid item
            xs={false}
            sm={4}
            md={5}
            sx={{

              [theme.breakpoints.down('lg')]: {},
              [theme.breakpoints.down('md')]: {},
              [theme.breakpoints.down('sm')]: {},
            }}/>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square sx={{
          backgroundColor: 'rgba(224, 228, 255, 0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          },
        }}>
          <Box
            sx={{
              mt: 20,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(224, 228, 255, 0.8)',
            }}
          >
        <Typography component="h1" variant="h4" mt={3} sx={{
          fontWeight: 'bold',
          color: 'black'
        }}>
          PokerHand
        </Typography>
        <Typography variant="body2" mt={2} textAlign='center' sx={{
          fontSize: '18px',
          color: 'black'
        }}>
          asdfhjgasjhdfas adgashjdgashjd asujkdhasjkdgahjs asjkdajksdajkd asjkdasjkda
        </Typography>
        <Button
          href='https://opensea.io/collection/hype-bears-club-official-'
          target='_blank'
          sx={{
            color: 'black',
            textDecoration: 'none',
            height: '30px',
            borderRadius: '10px',
            paddingX: 5,
            border: '2px solid black',
            fontSize: '14px',
            fontWeight: 'bold',
            transitionDuration: '.3s',
            mt: 4,
            mb: 3,
            '&:hover': {
              color: 'gold',
              boxShadow: 'inset 0 0 0 4px black',
              border: '4px solid black',
            },
            [theme.breakpoints.down('md')]: {
              mt: 2
            },
          }}>
          BUY NOW
        </Button>
          </Box>
      </Grid>
    </Grid>
  )
};

export default Banner;

import React from 'react';
import { Box, Container, Grid, Link, Typography, useTheme } from '@mui/material';

const Banner = () => {
    const theme = useTheme();
    return (
      <Box sx={{
        backgroundImage: 'url("/images/banner.png")',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <Container sx={{height: 'auto',
        [theme.breakpoints.down('md')]: {
          height: '50vh'
        },
        [theme.breakpoints.down('sm')]: {
          height: '40vh'
        },

      }}>
        <Grid container sx={{
          minHeight: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          pb: 20,
          [theme.breakpoints.down('md')]: {
            height: '20vh'
          },
          [theme.breakpoints.down('sm')]: {
            height: '10vh'
          },
        }}>
          <Grid item xs={12} ml={80} mt={40} sx={{
            height: '200px',
            display: 'block',
            textAlign: 'center',
            backgroundColor: 'rgba(242, 189, 239, .3)',
            boxShadow: '4px 4px 44px 48px rgba(190, 123, 206, 0.2)',
            [theme.breakpoints.down('md')]: {
              ml:30,
              mt:20,
              height: '200px'
            },
            [theme.breakpoints.down('sm')]: {
              ml:1,
              mt:30,
              height: '150px'
            },
          }}>
            <Typography sx={{
              fontSize: '34px',
              fontWeight: 'bold',
              color: '#800080',
              [theme.breakpoints.down('md')]: {

              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '21px'
              },
            }}>PokerHand</Typography>
            <Typography sx={{
              fontSize: '20px',
              color: '#ff00ff',
              [theme.breakpoints.down('md')]: {

              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '15px'
              },
            }}>asdasd asjdhajks asjfhasjkf asjfasjfka asjfaskjf
            gdfgdfgdfgdgdfgdfg dfgdfgdfg dfgdfgdfg dfgdfgdf
            dgdgdfgdfg dfgdfgdfg </Typography>
            <Link
              href='https://opensea.io/collection/hype-bears-club-official-'
              target='_blank'
              sx={{
                color: '#800080',
                height: '50px',
                width:'100px',
                borderRadius: '10px',
                paddingX: 5,
                border: '2px solid #800080',
                fontSize: '16px',
                fontWeight: 700,
                transitionDuration: '.3s',
                '&:hover': {
                  color: '#8a2be2',
                  boxShadow: 'inset 0 0 0 1px #8a2be2',
                  border: '1px solid #8a2be2',
                },
                [theme.breakpoints.down('md')]: {
                  mt: 2
                },
              }}>
              BUY NOW
            </Link>
          </Grid>
        </Grid>
      </Container>
      </Box>
    )
};

export default Banner;

import React from 'react';
import {Box, Container, Card, Link, Typography, useTheme, CardContent, CardActions} from '@mui/material';

const Banner = () => {
    const theme = useTheme();
    return (
      <Box sx={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/banner.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <Container>
        <Box ml={75} mt={40} sx={{
          width: '500px',
          [theme.breakpoints.down('lg')] : {
            ml:55
          },
          [theme.breakpoints.down('md')] : {
            ml:20,
            width: '500px'
          },
          [theme.breakpoints.down('sm')] : {
            ml:0,
          },
        }}>
          <Card sx={{
            height: '250px',
            textAlign: 'center',
            backgroundColor: 'rgba(242, 189, 239, .3)',
            boxShadow: '4px 4px 44px 48px rgba(190, 123, 206, 0.2)',
          }}>
            <CardContent>
            <Typography  variant="h5" component="div" sx={{
              fontWeight: 'bold',
              color: '#800080',
              [theme.breakpoints.down('md')]: {

              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '21px'
              },
            }}>PokerHand</Typography>
            <Typography mt={1} sx={{
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
              <CardActions sx={{
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.down('sm')]: {
                  mt:3
                },
              }}>
            <Link
              href='https://opensea.io/collection/hype-bears-club-official-'
              target='_blank'
              sx={{
                mt: 4,
                color: '#800080',
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
              </CardActions>
            </CardContent>
          </Card>
        </Box>
      </Container>
      </Box>
    )
};

export default Banner;

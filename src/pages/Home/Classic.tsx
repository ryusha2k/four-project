import React from 'react';
import { Box, Container, Grid, Link, Typography, useTheme } from "@mui/material";

const Classic = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 1500,
        display: 'flex',
        height: 595,
        backgroundImage: 'url("/images/classic.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50%',
        backgroundPosition: 'right -100px bottom 0',
        [theme.breakpoints.up('lg')]: {
          backgroundSize: '35%',
          backgroundPosition: 'right bottom',
        },
        [theme.breakpoints.down('md')]: {
          backgroundImage: 'none',
          height: 'auto',
          paddingX: 1,
        },
      }}>
        <Container sx={{
          display: 'flex',
          alignItems: 'flex-end',
        }}>
          <Grid container sx={{
            display: 'flex',
            alignItems: 'flex-end',
          }}>
            <Grid item xs={12} sx={{
              letterSpacing: '-0.085rem',
            }}>
              <Typography sx={{
                fontSize: '56px',
                justifyContent: 'center',
                textAlign: 'left',
                lineHeight: '52px',
                [theme.breakpoints.down('xl')]: {
                  fontSize: theme.typography.pxToRem(42),
                  lineHeight: '40px',
                },
                [theme.breakpoints.down('md')]: {
                  pt: 10,
                  pb: 5,
                  textAlign: 'center',
                  fontSize: theme.typography.pxToRem(36),
                  lineHeight: '34px',
                },
                [theme.breakpoints.down('sm')]: {
                  pt: 7,
                  pb: 1,
                  fontSize: theme.typography.pxToRem(24)
                },
              }}>
                A CLASSIC <strong>10,000 COLLECTION</strong> <br/>
                BY
                <Link
                  href="https://twitter.com/jpegenthusiast_"
                  target="_blank"
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 700
                  }}
                >
                  @JPEGENTHUSIAST_
                </Link>
              </Typography>
              <Typography sx={{
                color: 'silver',
                pb: 10,
                lineHeight: '104px',
                [theme.breakpoints.down('md')]: {
                  pb: 5,
                  textAlign: 'center'
                },
              }}>
                Own a #HYPEBEARS to join the Exclusive Club.
              </Typography>

            </Grid>
            <Grid item xs={12} sx={{
              display: 'flex',
              justifyContent: 'center',
              [theme.breakpoints.up('md')]: {
                display: 'none'
              },
            }}>
              <Typography
                sx={{
                  width: '90%',
                  maxWidth: 500,
                  minWidth: 300
                }}
                component='img' src='/images/classic.png'/>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  )
};

export default Classic;

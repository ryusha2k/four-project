import React from 'react';
import {Box, Grid, Typography, useTheme} from "@mui/material";

const Release = () => {
  const theme = useTheme();
  return (
    <Box id="#release-date" sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        width: '100%',
        height: '250px',
        display: 'flex',
        backgroundImage: 'url("/images/release.png")',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        [theme.breakpoints.down('md')] : {
          height: 450,
          backgroundImage: 'url("/images/release-mob.png")',
          backgroundSize: 'cover',
        },
        [theme.breakpoints.down('sm')] : {
          height: 450,
        },
      }}>
        <Grid container mt={8} sx={{
          display: 'block',
          textAlign: 'center',
          [theme.breakpoints.down('md')] : {
            mt: 10,
          },
          [theme.breakpoints.down('md')] : {
            mt: 21,
          },
        }}>
          <Typography sx={{
            fontSize: '18px',
            letterSpacing: '0.335rem',
          }}>
            HYPEBEARS RELEASED
          </Typography>
          <Typography sx={{
            fontSize: '72px',
            fontWeight: 'bold',
            [theme.breakpoints.down('sm')] : {
              fontSize: '48px',
            },
          }}>
            2/2/2022
          </Typography>
        </Grid>
      </Box>
    </Box>
  )
};

export default Release

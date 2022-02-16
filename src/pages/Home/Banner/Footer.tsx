import React from 'react';
import { Container, Grid, Typography, useTheme} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
   <Container>
     <Grid container>
     <Grid item mt={8} xs={12} sx={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
       textAlign: 'center',
          [theme.breakpoints.down('md')] : {
            mt: 9,
          },
          [theme.breakpoints.down('md')] : {
            mt: 9,
          },
        }}>
          <Typography sx={{
            fontSize: '18px',
            letterSpacing: '-0.05rem',
          }}>
            © 2022 HYPEBEARS.
          </Typography>
        </Grid>
     </Grid>
   </Container>

  )
};

export default Footer;

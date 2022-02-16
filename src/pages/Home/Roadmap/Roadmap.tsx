import React from "react";
import { Card, CardContent, Grid, Typography, Container, Box, useTheme } from "@mui/material";

const cards: {title: string; body: string; img: string;}[] = [
    {
        title: 'HYPEBEARS',
        body: 'Social Club',
        img: '1.png'
    },
    {
        title: 'HYPEBank',
        body: '($HYPEB)',
        img: '2.png'
    },
    {
        title: 'HYPEBEARS',
        body: 'Staking UI',
        img: '3.png'
    },
    {
        title: 'HYPEBEARS',
        body: 'Animated Signature Walk Mint',
        img: '4.png'
    },
    {
        title: 'HYPEBEARS',
        body: 'Merchandise',
        img: '5.png'
    }
]

const Roadmap = () => {
    const theme = useTheme();

    return (
      <Box id='#roadmap' sx={{
          width: '100%',
          backgroundColor: theme.palette.common.white,
          backgroundImage: 'url("/images/roadmap/lines.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
      }}>
          <Container>
              <Grid container>
                  <Grid item xs={12} sx={{
                      width: '100%',

                  }}>
                      <Typography sx={{
                          color: '#000',
                          fontSize: '64px',
                          fontWeight: 'bold',
                          display: 'flex',
                          justifyContent: 'center',
                          mt: 5,
                      }}>
                          ROADMAP
                      </Typography>
                  </Grid>
              </Grid>
          </Container>
          <Container>
              <Grid container columns={15} spacing={2} sx={{marginY: 5, display: 'flex', justifyContent: 'center'}} >
                  {
                      cards.map((card, index) =>
                        <Grid key={`${card.title}-${card.img}`} item xs={12} sm={5} md={3} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Card elevation={0} sx={{
                                background: 'rgba(0, 0, 0, 0.02)',
                                maxWidth: 350,
                                width: '100%'
                            }}>
                                <CardContent sx={{
                                    color: '#000',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    paddingY: 5,
                                    paddingX: 2.5
                                }}>
                                    <Box sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        fontWeight: 900,
                                        fontSize: '1.5rem',
                                        fontFamily: 'Poppins'
                                    }}>
                                        {`${index + 1}/${cards.length}`}
                                    </Box>
                                    <Typography
                                      component='img'
                                      src={`/images/roadmap/${card.img}`}
                                      sx={{
                                          width: '100%',
                                      }}
                                    />
                                    <Typography sx={{
                                        fontWeight: 'bold'
                                    }}>
                                        {card.title}
                                    </Typography>
                                    <Typography sx={{
                                        textAlign: 'center'
                                    }}>
                                        {card.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                      )
                  }

              </Grid>
          </Container>
      </Box>

    )
}

export default Roadmap

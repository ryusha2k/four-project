import React, { useMemo, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  Drawer, useTheme, Container, Grid
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll'
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { MyNavLink } from "../UI/MyLink";
import { ScrollURLS, URLConfig, URLNames } from "../../config/paths";
import logo from "../../assets/images/logo.jpg";
import {AllExternalLinks} from "../UI/AllExternalLinks";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const {children, window} = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function HideBar(props: Props) {
  const {children} = props;
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const inMint = useMemo<boolean>(() => location.pathname === '/mint', [location]);

  const toggleDrawer =
    (_open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setOpen(_open);
      };

  return (
    <>
      <HideOnScroll {...props} >
        <AppBar sx={{
          backgroundColor: 'transparent',
          color: 'black',
          boxShadow: 0
        }}>
          <Toolbar>
            <Container>
              <Grid container>
                <Grid item xs={12} sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  [theme.breakpoints.down('sm')]: {
                    flexDirection: 'row-reverse'
                  },
                }}>
                  <Box display='flex' sx={{
                    width: '40%',
                    justifyContent: 'flex-start',
                    [theme.breakpoints.down('sm')]: {
                      width: '100%',
                      justifyContent: 'flex-end',
                    },
                  }}>
                    <MyNavLink to='/' sx={{
                      width: 30,
                      height: 30
                    }}>
                      <Typography component='img' src={logo} width='100%' height='100%' />
                    </MyNavLink>
                  </Box>


                  <Typography component='div' sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: '100%',
                    [theme.breakpoints.down('sm')]: {
                      display: 'none'
                    },
                    [theme.breakpoints.down('md')]: {
                      justifyContent: "flex-end",
                    },
                  }}>
                    <Typography component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                      <Box sx={{
                        display: "flex"
                      }}>
                        {
                          ScrollURLS.map((key: URLNames) => {
                            const option = URLConfig[key];
                            return (
                              <Typography key={key} sx={{
                                '& a.active-scroll-link': {
                                  color: 'gold',
                                },
                                cursor: 'pointer',
                                marginRight: 1,
                                marginLeft: 1,
                                fontWeight: 600
                              }}>
                                {
                                  inMint ?
                                    <MyNavLink to='/'>
                                      {option.title}
                                    </MyNavLink> :
                                    <ScrollLink key={key} to={option.path} activeClass="active-scroll-link" spy smooth duration={500}>
                                      {option.title}
                                    </ScrollLink>
                                }

                              </Typography>
                            );
                          })
                        }
                      </Box>
                    </Typography>
                  </Typography>
                  <Box sx={{
                    [theme.breakpoints.down('md')]: {
                      display: 'none'
                    },
                  }}>
                    <AllExternalLinks/>
                  </Box>

                  <Typography component='div' sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    [theme.breakpoints.up('sm')]: {
                      display: 'none'
                    },
                  }}>
                    <IconButton aria-label="open menu"
                                onClick={toggleDrawer(true)}>
                      <MenuIcon/>
                    </IconButton>
                  </Typography>
                </Grid>
              </Grid>
            </Container>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        anchor='left'
        open={open}
        onClose={toggleDrawer( false)}
        sx={{
          '& .MuiPaper-root': {
            minWidth: '20%',
            maxWidth: '70%',
          }
        }}
      >
        <Box sx={{position: "absolute", right: 0, top: 0}}>
          <IconButton aria-label="open menu"
                      onClick={toggleDrawer(false)}>
            <CloseIcon/>
          </IconButton>

        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'flex-start',
          p: 5,
          height: '100%',
          backgroundColor: '#2b2b2b'
        }}>
          <Box sx={{pb: 5}}>
            {
              ScrollURLS.map((key: URLNames) => {
                const option = URLConfig[key];
                return (
                  <Typography key={key} sx={{
                    '& a.active-scroll-link': {
                      color: 'gold',
                    },
                    cursor: 'pointer',
                    marginRight: 1,
                    marginLeft: 1,
                    marginBottom: 3,
                    fontWeight: 600
                  }}>
                    <ScrollLink
                      to={option.path}
                      activeClass="active-scroll-link"
                      onClick={() => {toggleDrawer(false); history.push(option.path)}}
                      spy smooth duration={500}>
                      {option.title}
                    </ScrollLink>
                  </Typography>

                );
              })
            }
          </Box>

          <Box>
            <AllExternalLinks
              sx={{
                margin: 1
              }}
              multi
            />
          </Box>
        </Box>
      </Drawer>
      <Toolbar/>
      {children}
    </>
  )
}

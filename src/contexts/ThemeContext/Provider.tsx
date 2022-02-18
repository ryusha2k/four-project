import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

export const ThemeProviderWrapper: React.FC = ({children}) => {
    const mode = 'dark';
    const black = 'background-image: -webkit-linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n' +
      'background-image: -moz-linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n' +
      'background-image: -o-linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n' +
      'background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n';
    const white = '#fff';
    const theme = React.useMemo(
      () =>
        createTheme({
            typography: {
                fontFamily: "Inter, sansTextField-serif",
            },
            shape: {
                borderRadius: 12
            },
            palette: {
                mode,
                common: {
                    black,
                    white
                },
                primary: {
                    light: '#FFF258',
                    main: '#eee',
                    dark: '#aaa',
                    contrastText: '#000',
                },
                secondary: {
                    light: '#F2F4F9',
                    main: '#E0E1E9',
                    dark: '#93939B',
                    contrastText: '#000',
                },
                background: {
                    default: black,
                    paper: white
                }
            },
            components: {
                MuiContainer: {
                    styleOverrides: {
                        root: {
                            display: 'flex',
                            alignItems: 'center'
                        }
                    }
                },
                MuiToolbar: {
                    styleOverrides: {
                        root: {
                            background: "transparent"
                        },
                        gutters: {
                            // minHeight: '0px !important',

                        }
                    }
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                        }
                    }
                }
            }
        }),
      [mode, white, black],
    );

    const responsiveTheme = responsiveFontSizes(theme);

    return (
      <ThemeProvider theme={responsiveTheme}>
          {children}
      </ThemeProvider>
    );
}

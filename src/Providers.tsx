import React from "react";
import {Provider} from "react-redux";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from "react-toastify";
import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import 'react-toastify/dist/ReactToastify.css';
import store from "./state";



const Providers: React.FC = ({children}) => {
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <HelmetProvider>
          <CssBaseline/>
          <ToastContainer newestOnTop position='bottom-right' closeOnClick={false} limit={2}/>
          {children}
        </HelmetProvider>
      </ThemeProviderWrapper>
    </Provider>
  )
}

export default Providers;

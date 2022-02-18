import React, {lazy} from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import history from '../routerHistory'
import '../index.css';
import Home from "./Home";
import HideBar from "../components/Bar";
import SuspenseWithChunkError from "../components/SuspenseWithChunkError";
import {PageLoader} from "../components/UI/PageLoader";
import {getLibrary} from "../utils/web3React";
import {RefreshContextProvider} from "../contexts/RefreshContext";
import { BlockList } from "../components/BlockList";

const Inspector = lazy(() => import('./Inspector'));

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Route path="/" exact>
        <Home/>
      </Route>
      <HideBar>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/inspector" exact>
              <Web3ReactProvider getLibrary={getLibrary}>
                <RefreshContextProvider>
                  <BlockList>
                    <Inspector/>
                  </BlockList>
                </RefreshContextProvider>
              </Web3ReactProvider>
            </Route>
            <Route path="*" exact>
              <Redirect to='/'/>
            </Route>
          </Switch>
        </SuspenseWithChunkError>
      </HideBar>
    </Router>
  )
}

export default React.memo(App)

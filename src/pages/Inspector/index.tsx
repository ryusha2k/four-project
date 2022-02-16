import React, {useEffect, useMemo} from 'react';
import {Box, CircularProgress, Container, Divider, Grid, Typography, useTheme} from "@mui/material";
import { CSVLink } from "react-csv";
import json2csv from "json2csv";
import {useHistory} from "react-router-dom";
import WalletModal from "../../components/WalletModal";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import {useNFTOwnersList, useNFTProgress} from "../../state/contractNFT/hooks";

import {usePollBlockNumber} from "../../state/block/hooks";
import useEagerConnect from "../../hooks/useEagerConnect";
import useEagerFetchData from "../../hooks/useEagerFetchData";
import {INSPECTOR} from "../../config/constants";
import {fetchNFTOwnersThunk} from "../../state/contractNFT";
import {useAppDispatch} from "../../state";
import {useNftContract} from "../../hooks/useContract";

export default function Inspector() {
  usePollBlockNumber();
  useEagerConnect();
  useEagerFetchData();
  const theme = useTheme();
  const history = useHistory();
  const {account} = useActiveWeb3React();
  const nftOwnersList = useNFTOwnersList();
  const nftContract = useNftContract();
  const progress = useNFTProgress();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (account && INSPECTOR !== account) {
      history.push('/');
    }
    if (account && INSPECTOR === account && nftContract) {
      dispatch(fetchNFTOwnersThunk(nftContract));
    }
  }, [account, history, nftContract, dispatch]);

  const parsed = useMemo(() => {
    return json2csv.parse(nftOwnersList, {fields: ['address', 'balance'], quote: ''});
  }, [nftOwnersList]);

  useEffect(() => {
    console.log(parsed)
  }, [parsed])

  return (
    <Box sx={{
      width: '100%',
      height: 'calc(100% - 64px)',
      backgroundImage: 'url("/images/mint/bg.png")',
      backgroundSize: 'contain'
    }}>
      <Container sx={{
        height: '100%',
        backgroundColor: theme.palette.common.black
      }}>
        <Grid container>
          <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            {
              account ?
                nftOwnersList.length === 0 ?
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center'
                  }}>
                    Analyzed accounts: {progress}
                    <CircularProgress/>
                  </Box>

                  :
                  <Box sx={{display: 'flex', flexDirection: 'column', overflowY: 'scroll', maxHeight: '90vh'}}>
                    <Typography variant='h2'>Top 10 holders</Typography>
                    <Divider sx={{marginY: 1}}/>
                    {
                      nftOwnersList.slice(0, 10).map(owner =>
                        <Box key={owner.address} sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}>
                          <div style={{padding: '0 5px'}}>{owner.address}</div>
                          <div style={{padding: '0 5px'}}>{owner.balance}</div>
                        </Box>
                      )
                    }
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                      <CSVLink
                        filename={`Hypebears Holders ${new Date().toDateString()}`}
                        data={parsed} style={{
                        margin: '10px 0',
                        backgroundColor: theme.palette.grey.A100,
                        color: 'black',
                        padding: '10px',
                        borderRadius: '5px'
                      }}>GET ALL IN CSV</CSVLink>
                    </Box>

                  </Box>
                :
                <WalletModal/>
            }

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

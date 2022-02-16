import React from 'react'
import {Box, CircularProgress} from "@mui/material";


export const PageLoader: React.FC = () => {
  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <CircularProgress />
    </Box>
  )
}

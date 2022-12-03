import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'


const Index = () => {
  return (
    <Box mb='20px'>
        <Header title='LineChart' subtitle = 'Simple Linechart' />
        <Box height='75vh'>
            <LineChart/>
        </Box>
    </Box>
  )
}

export default Index
import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'


const Index = () => {
  return (
    <Box mb='20px'>
        <Header title='BarChart' subtitle = 'Simple Barchart' />
        <Box height='75vh'>
            <BarChart/>
        </Box>
    </Box>
  )
}

export default Index
import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'


const Index = () => {
  return (
    <Box mb='20px'>
        <Header title='PieChart' subtitle = 'Simple Piechart' />
        <Box height='75vh'>
            <PieChart/>
        </Box>
    </Box>
  )
}

export default Index
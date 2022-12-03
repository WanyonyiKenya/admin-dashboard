import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import Geography from '../../components/Geography'
import { useTheme } from '@mui/material'
import {tokens} from '../../theme'


const Index = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box mb='20px'>
        <Header title='Geographical Map' subtitle = 'A geographical data representation.' />
        <Box height='75vh' border= {`1px solid ${colors.grey[100]}`}  borderRadius = '4px'>
            <Geography/>
        </Box>
    </Box>
  )
}

export default Index
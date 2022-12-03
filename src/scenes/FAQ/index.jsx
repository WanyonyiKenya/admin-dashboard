import React from 'react'
import { useTheme, Box, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

import Header from '../../components/Header'

const Index = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box>
        <Header title = 'FAQ' subtitle='Frequently Asked Questions' />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color = {colors.greenAccent[500]}>
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                   Why cant i update my details on the user side
                </Typography>
            </AccordionDetails>
        </Accordion>
        
    </Box>
  )
}

export default Index
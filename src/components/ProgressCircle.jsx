  import React from 'react'
  import { Box, useTheme  } from '@mui/material'
  import { tokens } from '../theme'
  
  const ProgressCircle = ({progress = '0.75', size = '40'}) => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const angle = progress * 360
    

    return (
      <Box 
        sx={{
          background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
          //giving the progress circle gradient of transparent from 0deg  to the angle deg
          //then giving it a blueAccent[500] color from angle deg to 360(rest of the circle)
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg ),
            ${colors.greenAccent[500]} `, 
            borderRadius: '50%',//make the progresscircle rouded
            width:`${size}px`,
            height:`${size}px`
        }}
      />
    )
  }
  
  export default ProgressCircle
import React from 'react'
import Header from '../../components/Header'
import { Box,Button, IconButton,Typography,useTheme } from '@mui/material'
import { tokens } from '../../theme'
import {mockTransactions}  from '../../data/data'
import  DownloadOutlinedIcon  from '@mui/icons-material/DownloadOutlined'
import  EmailIcon  from '@mui/icons-material/Email'
import  PointOfSaleIcon  from '@mui/icons-material/PointOfSale'
import  PersonAddIcon  from '@mui/icons-material/PersonAdd'
import  TrafficIcon  from '@mui/icons-material/Traffic'


import LineChart from '../../components/LineChart'
import BarChart from '../../components/BarChart'
import Geography from '../../components/Geography'
import StatBox from '../../components/StatBox'
import ProgressCircle from '../../components/ProgressCircle'



const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m = '20px'>
      <Box display='flex' justifyContent = 'space-between' alignItem = 'center'>
          <Header title ='Dashboard' subtitle='Welcome to your Dashbooard' />
     
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700], 
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight:'bold',
            padding: '10px 20px'
          }}
        >
          <DownloadOutlinedIcon sx= {{mr:'10px'}} />
          Download Reports
        </Button> 
        </Box>
      </Box>
      {/* Grid And Charts */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap= '20px'
      >
        {/* Row 1 */}
        <Box
          gridColumn='span 3'
          backgroundColor = {colors.primary[400]}
          display = 'flex'
          alignItems='center'
          justifyContent='center'
        >

          <StatBox 
            title='12,361'
            subtitle = 'Email Sent'
            progress = '0.75'
            increase = '+14%'
            icon = {
              <EmailIcon 
              sx = {{
                color:colors.greenAccent[600],
                fontSize:'26px'
              }}
              />
            }
          />
        </Box>

        <Box
          gridColumn='span 3'
          backgroundColor = {colors.primary[400]}
          display = 'flex'
          alignItems='center'
          justifyContent='center'
        >

          <StatBox 
            title='431,361'
            subtitle = 'Sales'
            progress = '0.5'
            increase = '+14%'
            icon = {
              <PointOfSaleIcon 
              sx = {{
                color:colors.greenAccent[600],
                fontSize:'26px'
              }}
              />
            }
          />
        </Box>

          <Box
            gridColumn='span 3'
            backgroundColor = {colors.primary[400]}
            display = 'flex'
            alignItems='center'
            justifyContent='center'
          >

            <StatBox 
              title='34552'
              subtitle = 'Clients '
              progress = '0.56'
              increase = '+40%'
              icon = {
                <PersonAddIcon 
                sx = {{
                  color:colors.greenAccent[600],
                  fontSize:'26px'
                }}
                />
              }
            />
          </Box>

          <Box
          gridColumn='span 3'
          backgroundColor = {colors.primary[400]}
          display = 'flex'
          alignItems='center'
          justifyContent='center'
        >

          <StatBox 
            title='1,652,361'
            subtitle = 'Total site traffic'
            progress = '0.86'
            increase = '+74%'
            icon = {
              <TrafficIcon 
              sx = {{
                color:colors.greenAccent[600],
                fontSize:'26px'
              }}
              />
            }
          />
        </Box>
            {/* Row 2 */}
            <Box
              gridColumn='span 8'
              gridRow = 'span 2'
              backgroundColor = {colors.primary[400]}
            >
              <Box
              mt = '25px'
              p = '0 30px'
              display = 'flex'
              justifyContent='space-between'
              alignItems = 'center'
              >
                <Box>
                  <Typography
                    variant='h5'
                    fontWeight='600'
                    color= {colors.grey[100]}
                  >
                    Reveue Generated
                  </Typography>
                  
                  <Typography
                    variant='h3'
                    fontWeight='bold'
                    color= {colors.greenAccent[500]}
                  >
                   $59,342,320
                  </Typography>

                  </Box>

                  <Box>
                    <IconButton>
                      <DownloadOutlinedIcon 
                      sx={{
                        fontSize:'26px',
                        color: colors.greenAccent[500]
                      }}
                      />
                    </IconButton>
                  </Box>
                  
                </Box >

                <Box
                  height='250px'
                  mt ='-20px'
                >
                  <LineChart isDashboard = {true} />
                </Box >
                </Box>
                <Box
                  gridColumn='span 4'
                  gridRow='span 2'
                  backgroundColor = {colors.primary[400]}
                  overflow = 'auto'
                
                >

                  <Box 
                    display = 'flex'
                     justifyContent ='space-between'
                     alignItems='center'
                    borderBottom ={`4px solid ${colors.primary[500]}`} 
                    color ={colors.grey[100]}
                    p ='15px'
                    >
                        <Typography
                          color={colors.grey[100]}
                          variant = 'h5'
                          fontWeight='600'
                        >
                          Recent Transaction
                        </Typography>

                   </Box>
                   {mockTransactions.map((trans,i) => (
                    <Box
                      key = {`${trans.txId}-${i}`}
                      display = 'flex'
                      justifyContent='space-between'
                      alignItems='center'
                      borderBottom={`4px solid ${colors.primary[500]}`}
                      p = '15px'
                    >
                      <Box>
                      <Typography
                          color={colors.greenAccent[500]}
                          variant = 'h5'
                          fontWeight='600'
                        >
                          {trans.txId}
                        </Typography>

                        <Typography
                          color={colors.grey[100]}
                        
                        >
                          {trans.user}
                        </Typography>

                      </Box>

                      <Box
                        color={colors.grey[100]}
                      >
                        {trans.date}
                      </Box>
                      <Box
                        backgroundColor ={colors.greenAccent[500]}
                        p = '5px 10px'
                        borderRadius='4px'
                      >
                        ${trans.cost}
                      </Box>

                    </Box>
                   ))}

                </Box>

                <Box
                  gridColumn='span 4'
                  gridRow= 'span 2'
                  backgroundColor = {colors.primary[400]}
                  p = '30px'
                >

                  <Typography
                    variant='h5'
                    fontWeight='600'
                  >
                    Campaign
                  </Typography>
                  <Box
                    display = 'flex'
                    flexDirection='column'
                    alignItems='center'
                    mt = '25px'
                   >
                    <ProgressCircle 
                      size ='125'
                    />
                    <Typography
                      variant='h5'
                      color = {colors.greenAccent[500]}
                      sx ={{
                        mt: '15px'
                      }}
                    >
                      48,252  revenue generated this year
                    </Typography>
                      <Typography
                      variant='h5'
                      fontWeight='600'
                    >
                       Includes extra misc expenditures and costs
                    </Typography>
                   </Box>
                </Box>

                {/*  */}
                <Box
                  gridColumn='span 4'
                  gridRow= 'span 2'
                  backgroundColor = {colors.primary[400]}
                  
                >

                  <Typography
                    variant='h5'
                    fontWeight='600'
                    sx={{
                      p:'30px 30px 0 30px'
                    }}
                  >
                    Sales Quantiy
                  </Typography>
                  <Box
                    height = '250px'
                    mt = '-20px'
                   >
                    <BarChart isDashboard = {true} />
                   </Box>
                </Box>
             
                <Box
                  gridColumn='span 4'
                  gridRow= 'span 2'
                  backgroundColor = {colors.primary[400]}
                  p = '30px'
                >

                  <Typography
                    variant='h5'
                    fontWeight='600'
                    sx={{
                      mb:'15px'
                    }}
                  >
                    Traffic based On geography
                  </Typography>
                  <Box
                    height = '200px'
                    mt = '-20px'
                   >
                    <Geography isDashboard = {true} />
                   </Box>
                </Box>
             
            </Box>

      
    </Box>
  )
}

export default Dashboard
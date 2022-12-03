import React from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import {tokens} from '../../theme'
import {mockDataContacts} from '../../data/data'
import Header from '../../components/Header'
import { useTheme } from '@mui/material'


const Index = () => {
const theme =useTheme ()
const colors = tokens(theme.palette.mode)


const columns = [
    {
    field:'id',
    headerName:'ID',
    flex:0.5
     },

     {
        field:'registarId',
        headerName: 'Registar ID'
     },

    {
    field:'name', 
    headerName:'Name', 
    flex:1, 
    cellClassName:'name-column--cell'
    },

    {
    field:'age', 
    headerName:'Age', 
    type:'number', 
    headerAlign:'left'
    },
    {
    field:'email', 
    headerName:'Email', 
    flex:1, 
    },
    {
    field:'phone', 
    headerName:'phone Number', 
    flex:1, 
    },

    {
        field:'address', 
        headerName:'Address', 
        flex:1, 
    },

    {
        field:'city', 
        headerName:'City', 
        flex:1, 
     },

     {
        field:'zipCode', 
        headerName:'ZipCode', 
        flex:1, 
    },

]


  return (
    <Box m='20px'>
        <Header title='CONTACTS' subtitle='Contscts for future rrference'/>
        <Box
            m ='40px 0 0 0'
            height = '75vh'
            sx = {{
                '& .MuiDataGrid-root':{
                    border:'none',
                },
                '& MuiDataGrid-cell':{
                    borderBottom : 'none',
                },
                '& .name-column--cell':{
                    color: colors.greenAccent[300]
                },
                '& .MuiDataGrid-columnHeaders':{
                    backgroundColor:colors.blueAccent[700],
                    borderBottom:'none' 
                },
                '& .MuiDataGrid-virtualScroller': {
                    backgroundColor:colors.primary[400]
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop:'none',
                    backgroundColor: colors.blueAccent[700]
                },
                '& .MuiDataGrid-toolbarContainer .MuiButton-text':{
                    color:`${colors.grey[100]} !important `
                }
            }}
        >
            <DataGrid
                rows={mockDataContacts}
                columns = {columns}
                components = {{Toolbar: GridToolbar}}
            />
        </Box>

    </Box>
  )
}

export default Index
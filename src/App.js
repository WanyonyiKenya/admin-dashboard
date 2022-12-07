import React,{useState} from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'


import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard' 
import Team from './scenes/Team'
import Contacts from './scenes/Contacts'
import Invoices from './scenes/Invoices'
import Form from './scenes/Form'
import  Calendar  from './scenes/Calendar'
import FAQ from './scenes/FAQ'
import Bar from './scenes/Bar'
import Pie from './scenes/Pie'
import Line from './scenes/Line'
import Geography from './scenes/Geography'

import { mockDataContacts as data } from './data/data'


const App = () => {
const[theme,colorMode] = useMode()
const [contact, setContact] = useState([data])

const newContact = (registarId,name,age,email,phone,address,city,zipCode) =>{
    const newContactItem = {id:Math.random()*1000,registarId,name,age,email,phone,address,city,zipCode}
    setContact(...contact,newContactItem)
}

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className='app'>
                    <Sidebar />
                <main className='content'>
                    <Topbar />
                    <Routes>
                        <Route path='/' element = {<Dashboard/>}/>
                        <Route path = '/Team' element = {<Team/>} />
                        <Route path = '/Contacts' element = {<Contacts/>} />
                        <Route path = '/Invoices' element = {<Invoices/>} />
                        <Route path = '/Form' element = {<Form/>} />
                        <Route path = '/Calendar' element = {<Calendar/>} />
                        <Route path = '/FAQ' element = {<FAQ/>} />
                        <Route path = '/Bar' element = {<Bar/>} />
                        <Route path = '/Pie' element = {<Pie/>} />
                        <Route path = '/Line' element = {<Line/>} />
                        <Route path = '/Geography' element = {<Geography/>} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider> 
    )
}

export default App
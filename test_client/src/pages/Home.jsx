import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { ProSidebarProvider } from "react-pro-sidebar";
import Navbar from '../components/Navbar';
import Dashboard from './dashboard';
<<<<<<< HEAD
import './index.css'
=======
import PopUpButton from './PopUpButton';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
>>>>>>> 3313761 (Changes to Add and Edit page)

function Home() {
    const theme = createTheme({
        palette: {
          neutral: {
            main: '#ca6f1e',
            contrastText: '#fff',
          },
        },
      });
      

    return (
        
        
        <div classname="table">
            <Dashboard/>
            <div class="divider"/>
            <ThemeProvider theme={theme}>
            <Button classname="newClaim" variant="contained" size="big" color="neutral" >Request New Claim</Button >
            </ThemeProvider>
    
        </div>
    );

}

export default Home;
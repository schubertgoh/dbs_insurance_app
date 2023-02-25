import { Button } from '@mui/material';
import React from 'react';
import { ProSidebarProvider } from "react-pro-sidebar";
import Navbar from '../components/Navbar';
import Dashboard from './dashboard';
import PopUpButton from './PopUpButton';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();


    return (
        <div>

            <Dashboard/>

            <PopUpButton/>
        <ProSidebarProvider>
            <Navbar/>
        </ProSidebarProvider>
        <Button onClick={() => navigate("/Add")}className='btn'>
                Add Claim
        </Button>
            
        </div>
    );

}

export default Home;
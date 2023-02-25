import React from 'react';
import { ProSidebarProvider } from "react-pro-sidebar";
import Navbar from '../components/Navbar';
import Dashboard from './dashboard';

function Home() {

    return (
        <div>
            <Dashboard/>
             <ProSidebarProvider>
             
            <Navbar/>
        </ProSidebarProvider>
        </div>
    );

}

export default Home;
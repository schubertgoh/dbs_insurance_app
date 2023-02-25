import React from 'react';
import { ProSidebarProvider } from "react-pro-sidebar";
import Navbar from '../components/Navbar';
import PopUpButton from './PopUpButton';


function Home() {

    return (
        <div>
            <PopUpButton/>
        <ProSidebarProvider>
            <Navbar/>
        </ProSidebarProvider>
        </div>
    );

}

export default Home;
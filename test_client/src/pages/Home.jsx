import { Button } from '@mui/material';
import React from 'react';
import { ProSidebarProvider } from "react-pro-sidebar";
import Navbar from '../components/Navbar';
import Dashboard from './dashboard';
import PopUpButton from './PopUpButton';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [claim, setClaim] = useState({
        "ClaimID": 2010,
        "InsuranceID": 1009,
        "FirstName": "Martin",
        "LastName": "Ong",
        "ExpenseDate": "2022-07-14T08:00:00+08:00",
        "Amount": 100.00,
        "Purpose": "Dentist",
        "FollowUp": 0,
        "PreviousClaimID": null,
        "Status": "Approved",
        "LastEditedClaimDate": "2022-07-15T12:22:45+08:00"
       })

    return (
        <div>

            <Dashboard/>

            <PopUpButton claim = {claim}/>
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
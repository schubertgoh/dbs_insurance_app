
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';


import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import retData from '../../../Main Challenge Dataset/InsuranceClaims.json'
import { useEffect, useState } from 'react';




//nested data is ok, see accessorKeys in ColumnDef below

    const [cleanData, setState] = useState([]);
    useEffect(() => {
        if (cleanData.length == 0){
            for(let i = 0; i < retData.length; i++){
                let curr = retData[i];
                curr['actions'] = <button type="view" >View</button>;
                console.log(curr);
                cleanData.push(retData[i]);
            }
            console.log(cleanData)
        }
    }, [retData])

    const data = [
            
    {
        name: {
        firstName: 'Irene',
        lastName: 'Lee',
        },
        claimId: '4372',
        status: "Pending",
        actions: <Stack direction="row" spacing={1}>
                <Button classname="view" variant="contained" size="small" color="success" >View</Button >
              <Button  classname="edit" variant="contained" size="small">Edit </Button>
             <Button  classname="delete" variant="contained" startIcon={<DeleteIcon />} size="small"  color="error">Delete</Button></Stack>,
    },
    {
        name: {
        firstName: 'Jane',
        lastName: 'Tan',
        },
        claimId: '2634',
        status: "Pending",
        actions: <Stack direction="row" spacing={1}>
        <Button classname="view" variant="contained" size="small" color="success" >View</Button >
       <Button  classname="edit" variant="contained" size="small">Edit </Button>
        <Button  classname="delete" variant="contained" startIcon={<DeleteIcon />} size="small"  color="error">Delete</Button></Stack>,
    },
    {
        name: {
        firstName: 'Joe',
        lastName: 'Lim',
        },
        claimId: '4634',
        status: "Pending",
        actions: <Stack direction="row" spacing={1}>
       <Button classname="view" variant="contained" size="small" color="success" >View</Button >
       <Button  classname="edit" variant="contained" size="small">Edit </Button>
        <Button  classname="delete" variant="contained" startIcon={<DeleteIcon />} size="small"  color="error">Delete</Button></Stack>,
    },
    {
        name: {
        firstName: 'Kevin',
        lastName: 'Loh',
        },
        claimId: '4383',
        status: "Pending",
        actions: <Stack direction="row" spacing={1}>
        <Button classname="view" variant="contained" size="small" color="success" >View</Button >
       <Button  classname="edit" variant="contained" size="small">Edit </Button>
        <Button  classname="delete" variant="contained" startIcon={<DeleteIcon />} size="small"  color="error">Delete</Button></Stack>,
    },
    {
        name: {
        firstName: 'Joshua',
        lastName: 'Poh',
        },
        claimId: '4748',
        status: "Pending",
        actions:<Stack direction="row" spacing={1}>
        <Button classname="view" variant="contained" size="small" color="success" >View</Button >
       <Button  classname="edit" variant="contained" size="small">Edit </Button>
        <Button  classname="delete" variant="contained" startIcon={<DeleteIcon />} size="small"  color="error">Delete</Button></Stack>,
    },
    ];


    const dashboard = () => {
       

    //should be memoized or stable
    const columns = useMemo(
        
        () => [
        {
            accessorKey: 'FirstName', //access nested data with dot notation
            header: 'First Name',
            
        },
        {
            accessorKey: 'LastName',
            header: 'Last Name',
        },
        {
            accessorKey: 'ClaimID', //normal accessorKey
            header: 'Claim ID',
        },
        {
            accessorKey: 'Status',
            header: 'Status',
        },
        {
            accessorKey: 'actions',
            header: 'View',
        },
        
        
        ],
        [],
    );

  
  

  return <MaterialReactTable  classname = "table"  columns={columns} data={data} />;
  
};


export default dashboard;


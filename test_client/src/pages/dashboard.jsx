import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import retData from '../../../Main Challenge Dataset/InsuranceClaims.json'
import { useEffect, useState } from 'react';

//nested data is ok, see accessorKeys in ColumnDef below

function dashboard (){

    const data = [
        {
            name: {
            firstName: 'John',
            lastName: 'Doe',
            },
            claimId: '566 Brakus Inlet',
            Status: 'South Linda',
            state: 'West Virginia',
        },
        {
            name: {
            firstName: 'Jane',
            lastName: 'Doe',
            },
            claimId: '566 Brakus Inlet',
            Status: 'South Linda',
            state: 'West Virginia',
        },
        {
            name: {
            firstName: 'Joe',
            lastName: 'Doe',
            },
            claimId: '566 Brakus Inlet',
            Status: 'South Linda',
            state: 'West Virginia',
        },
        {
            name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
            },
            claimId: '722 Emie Stream',
            Status: 'Lincoln',
            actions: <button type="view">View</button>,
           
        },
        {
            name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
            },
            claimId: '32188 Larkin Turnpike',
            Status: 'Charleston',
            state: 'South Carolina',
        },
        ];
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
            header: 'Actions',
        },
        
        ],
        [],
    );
    
  return <MaterialReactTable columns={columns} data={retData} />;
  
};

export default dashboard;
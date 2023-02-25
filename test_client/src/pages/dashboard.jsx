import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below

      
    <h1> Claims Profile </h1>;
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


    const dashboard = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
        {
            accessorKey: 'name.firstName', //access nested data with dot notation
            header: 'First Name',
        },
        {
            accessorKey: 'name.lastName',
            header: 'Last Name',
        },
        {
            accessorKey: 'claimId', //normal accessorKey
            header: 'Claim ID',
        },
        {
            accessorKey: 'status',
            header: 'Status',
        },
        {
            accessorKey: 'actions',
            header: 'Actions',
        },
        ],
        [],
    );
    
  return <MaterialReactTable columns={columns} data={data} />;
  
};

export default dashboard;
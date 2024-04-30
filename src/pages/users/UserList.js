import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import supabase from '../../SupabaseClient';
import './UserList.css'
import { Box } from '@mui/material';

const UserList = () => {

  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("users")
        .select()
      if (error) {
        console.log(error);
      }
      if (data) {
        setRowData(data)
      }
    }
    fetchData()
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'username',
      headerName: 'User',
      width: 250,
    },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 120,
    },
  ];


  return (
    <Box className='userlist' >
      {rowData &&
        <DataGrid
          rows={rowData}
          columns={columns}
        />}
    </Box>
  )
}

export default UserList
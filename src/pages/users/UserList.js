import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import supabase from '../../SupabaseClient';
import './UserList.css'
import { Box, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';


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

  const deleteHandler = async (id) => {

      const { data, error } = await supabase
        .from("users")
        .delete()
        .eq('id', id)
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
      }


    const newrowData = rowData.filter(data => {
      return data.id !== id
    })

    setRowData(newrowData)

    
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'username',
      headerName: 'User',
      width: 260,
      renderCell: (params) => {
        return (
          <>
            <Link className='user-link' to={`/users/${params.id}`}>
              <Avatar src={params.row.avatar} />
              {params.row.username}
            </Link>
          </>
        );
      }
    },
    { field: 'email', headerName: 'Email', width: 160 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 130,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='action'>
            <Link to={`/users/${params.id}`}>
              <div className='edit-icon'>
                <BorderColorOutlinedIcon />
                Edit
              </div>
            </Link>
            <div className='btn-delete' onClick={() => deleteHandler(params.row.id)} >
              <DeleteOutlineOutlinedIcon />
              Delete
            </div>
          </div>
        )
      }
    }
  ];


  return (
    <Box className='userlist' >
      {rowData &&
        <DataGrid
          rows={rowData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
        />}
    </Box>
  )
}

export default UserList
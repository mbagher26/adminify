import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import supabase from '../../SupabaseClient';
import { Box, Avatar} from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import './Products.css'

const Products = () => {

  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("products")
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
      .from("products")
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
      field: 'title',
      headerName: 'Title',
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link className='product-link' to={`/products/${params.id}`}>
              <Avatar src={params.row.avatar} />
              {params.row.title}
            </Link>
          </>
        );
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 130,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='action'>
            <Link to={`/products/${params.id}`}>
              <div className='edit-icon'>
                <BorderColorOutlinedIcon/>
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
          checkboxSelection
        />}
    </Box>
  )
}

export default Products
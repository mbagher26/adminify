import { Box, Stack, Typography, Button, Avatar, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import Chart from './../../components/chart/Chart'
import React from 'react'
import './Product.css'
import supabase from '../../SupabaseClient'

const Product = () => {

  const [productData, setProductData] = useState();


  useEffect(() => {
    const fetchChartData = async () => {
      const { data, error } = await supabase
        .from("productsdata")
        .select()
      if (error) {
        console.log(error);
      }
      if (data) {
        setProductData(data)
      }
    }
    fetchChartData()
  }, []);

  return (
    <Box className='product'>
      <Grid container={true} spacing={6}>

        <Grid md={12} item >
          <Stack direction='row' className="product-title-container">
            <Typography className="product-title" variant='h5'>Product</Typography>
            <Button variant="contained" className='btn-create'>
              Create
            </Button>
          </Stack>
        </Grid>

        < Grid md={6} item >
          <Stack className='product-chart'>
            <Chart grid title="Sale In Month" data={productData} dataKey="sales" />
          </Stack>
        </Grid >


        <Grid md={6} item >
          <Stack direction='row' className='product-info'>

            <Stack className='product-info-left'>
              <Avatar src='/Image/dell.jpg' variant='square' sx={{ width: '250px', height: '150px', margin: '10px' }} />
              <Typography className='product-name'>Dell</Typography>
            </Stack>

            <Stack className='product-info-right'>

              <Stack className='product-info-item'>
                <Typography className='product-key'>ID</Typography>
                <Typography className='product-value'>1</Typography>
              </Stack>

              <Stack className='product-info-item'>
                <Typography className='product-key'>Name</Typography>
                <Typography className='product-value'>Dell</Typography>
              </Stack>

              <Stack className='product-info-item'>
                <Typography className='product-key'>Sales</Typography>
                <Typography className='product-value'>$90000</Typography>
              </Stack>

              <Stack className='product-info-item'>
                <Typography className='product-key'>Active</Typography>
                <Typography className='product-value'>yes</Typography>
              </Stack>

              <Stack className='product-info-item'>
                <Typography className='product-key'>Is Stock</Typography>
                <Typography className='product-value'>no</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Product
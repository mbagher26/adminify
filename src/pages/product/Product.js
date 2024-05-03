import { Box, Stack, Typography, Button, Avatar } from '@mui/material'
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
      <Stack direction='row' className="product-title-container">
        <Typography className="producttitle">Product</Typography>
        <Button variant="contained" className='btn-create'>
          Create
        </Button>
      </Stack>

      < Stack className='product-chart' >
        <Chart grid title="Sale In Month" data={productData} dataKey="sales"/>
      </Stack >


      <Stack className='product-info'>
        <Stack className='product-info-top'>
          <Avatar src='/Image/dell.jpg' />
          <Typography className='product-name'>Dell</Typography>
        </Stack>
        <Stack className='product-info-button'>

          <Stack className='product-info-item'>
            <Stack className='product-key'>ID</Stack>
            <Stack className='product-value'>1</Stack>
          </Stack>

          <Stack className='product-info-item'>
            <Stack className='product-key'>Name</Stack>
            <Stack className='product-value'>Dell</Stack>
          </Stack>

          <Stack className='product-info-item'>
            <Stack className='product-key'>Sales</Stack>
            <Stack className='product-value'>$90000</Stack>
          </Stack>

          <Stack className='product-info-item'>
            <Stack className='product-key'>Active</Stack>
            <Stack className='product-value'>yes</Stack>
          </Stack>

          <Stack className='product-info-item'>
            <Stack className='product-key'>In Stock</Stack>
            <Stack className='product-value'>no</Stack>
          </Stack>
        </Stack>

      </Stack>
    </Box>
  )
}

export default Product
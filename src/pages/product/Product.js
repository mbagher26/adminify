import { Box, Stack, Typography, Button } from '@mui/material'
import Chart from './../../components/chart/Chart'
import React from 'react'
import './Product.css'

const Product = () => {
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
    </Box>
  )
}

export default Product
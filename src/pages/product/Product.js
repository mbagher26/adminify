import { Box, Stack, Typography, Button, Avatar, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import Chart from './../../components/chart/Chart'
import PublishIcon from "@mui/icons-material/Publish";
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

        <Grid xs={12} md={12} item >
          <Stack direction='row' className="product-title-container">
            <Typography className="product-title" variant='h5'>Product</Typography>
            <Button variant="contained" className='btn-create'>
              Create
            </Button>
          </Stack>
        </Grid>

        < Grid xs={12} md={6} item >
          <Stack className='product-chart'>
            <Chart grid title="Sale In Month" data={productData} dataKey="sales" />
          </Stack>
        </Grid >


        <Grid xs={12} md={6} item >
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

        <Grid md={12} item>
          <Stack direction='row' className='product-form'>

            <form className='form'>
              <div className='form-left'>
                <label htmlFor="">Product Name</label>
                <input className='input-product-name' placeholder='Dell laptop'/>

                <label>Is Active</label>
                <select name="" id="">
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>

                <label htmlFor="">Is Stock</label>
                <select name="" id="">
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>

              <div className='form-right'>
                <div className='form-uploader'> 
                  <img src="/Image/dell.jpg" alt="" className='form-img'/>
                  <label>
                    <PublishIcon />
                  </label>
                <input type="file" style={{ display: 'none' }} />
                </div>
                <button className='btn-form-edit'>Uploade (Edite)</button>
              </div>
            </form>


          </Stack>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Product
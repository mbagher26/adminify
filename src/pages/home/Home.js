import React from 'react'
import Feature from '../../components/features/Feature'
import './Home.css'
import Chart from '../../components/chart/Chart'
import { Box } from '@mui/material';


const Home = () => {


  
  return (
    <Box className='home'>
        <Feature />
        <Chart grid/>
    </Box>
  )
}

export default Home
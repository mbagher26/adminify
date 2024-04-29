import React from 'react'
import Feature from '../../components/features/Feature'
import './Home.css'
import Chart from '../../components/chart/Chart'
import { Box, Grid } from '@mui/material';
import WidgetSm from '../../components/widgetsm/WidgetSm';
import WidgetLg from '../../components/widgetlg/WidgetLg';



const Home = () => {



  return (
    <Box className='home'>
      <Feature />
      <Chart grid />
      <Grid container spacing={2}>
        <Grid className='grid-widget' xs={12} md={4} item>
          <WidgetSm />
        </Grid>
        <Grid className='grid-widget' xs={12} md={8} item>
          <WidgetLg />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
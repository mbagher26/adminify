import React from 'react'
import Feature from '../../components/features/Feature'
import './Home.css'
import Chart from '../../components/chart/Chart'
import { Box, Grid } from '@mui/material';
import WidgetSm from '../../components/widgetsm/WidgetSm';
import WidgetLg from '../../components/widgetlg/WidgetLg';
import supabase from '../../SupabaseClient'
import { useEffect, useState } from 'react'



const Home = () => {

  const [xAxisData, setXAxisData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      const { data, error } = await supabase
        .from("chart")
        .select()
      if (error) {
        console.log(error);
      }
      if (data) {
        setXAxisData(data)
      }
    }
    fetchChartData()
  }, []);

  return (
    <Box className='home'>
      <Feature />
      <Chart grid data={xAxisData} title='Month Sale' dataKey='sale'/>
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
import React from 'react'
import Feature from '../../components/features/Feature'
import './Home.css'
import Chart from '../../components/chart/Chart'
import { xAxisData } from '../../data'
import Grid from '@mui/material/Grid';

const Home = () => {

  
  return (
    <div className='home'>
      <Grid container  className='feature-grid'>
        <Grid  >
          <Feature />
        </Grid>
        <Grid>
          <Feature />
        </Grid>
        <Grid>
          <Feature />
        </Grid>
      </Grid>

      <Grid>
        <Chart data={xAxisData} dataKey="Sale" title='Month Sale' grid />
      </Grid>
    </div>
  )
}

export default Home
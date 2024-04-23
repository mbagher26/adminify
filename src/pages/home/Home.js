import React from 'react'
import Feature from '../../components/features/Feature'
import './Home.css'
import Chart from '../../components/chart/Chart'

const Home = () => {
  return (
    <div className='home'>
      <Feature />
      <Feature />
      <Feature />
      <Chart/>
    </div>
  )
}

export default Home
import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'

const Chart = ({ data, dataKey, title, grid }) => {
          return (
                    <div className='chart'>
                              <h3 className='chart-title'>{ title }</h3>
                              <ResponsiveContainer width="100%" height="100%" aspect={4}>
                                        <LineChart data={data}>
                                                  { grid && <CartesianGrid strokeDasharray="3 3"  stroke='#e0dfdf'/>}
                                                  <XAxis dataKey="name" stroke='#5550bd'/>
                                                  <Tooltip />
                                                  <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                                        </LineChart>
                              </ResponsiveContainer>
                    </div>
          )
}

export default Chart
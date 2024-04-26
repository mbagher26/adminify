import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'

const Chart = ({ data, dataKey, title, grid }) => {
          return (
                    <div className='chart'>
                              <ResponsiveContainer width="100%" aspect={4}>
                              <h3 className='chart-title'>{ title }</h3>
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
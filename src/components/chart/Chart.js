import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'
import { useEffect, useState } from 'react'
import supabase from '../../SupabaseClient'

const Chart = ({ grid }) => {

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
                    <div className='chart'>
                              <ResponsiveContainer width="100%" aspect={4}>
                                        <h3 className='chart-title'>Month Sale</h3>
                                        <LineChart data={xAxisData} className='line-chart'>
                                                  { grid && <CartesianGrid strokeDasharray="3 3"  stroke='#e0dfdf'/>}
                                                  <XAxis dataKey="name" stroke='#5550bd'/>
                                                  <Tooltip />
                                                  <Line type="monotone" dataKey="sale" stroke="#5550bd" />
                                        </LineChart>
                              </ResponsiveContainer>
                    </div>
          )
}

export default Chart
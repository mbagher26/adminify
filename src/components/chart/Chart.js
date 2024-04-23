import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
          return (
                    <div>
                              <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                                  width={500}
                                                  height={300}
                                                  data={data}
                                                  margin={{
                                                            top: 5,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                  }}
                                        >
                                                  <CartesianGrid strokeDasharray="3 3" />
                                                  <XAxis dataKey="name" />
                                                  <Tooltip />
                                                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                              </ResponsiveContainer>
                    </div>
          )
}

export default Chart
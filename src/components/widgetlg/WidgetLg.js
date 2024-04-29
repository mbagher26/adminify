import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './WidgetLg.css'
import { Avatar, Typography } from '@mui/material';
import { useState, useEffect } from 'react';import supabase from '../../SupabaseClient';



export default function BasicTable() {

          const [rowData, setRowData] = useState(null);

          useEffect(() => {
                    const fetchData = async () => {
                              const { data, error } = await supabase
                                        .from("transactions")
                                        .select()
                              if (error) {
                                        console.log(error);
                              }
                              if (data) {
                                        setRowData(data)
                                        console.log(data);
                              }
                    }
                    fetchData()
          }, []);

          return (
                    <TableContainer className='tabel-container' component={Paper}>
                              
                              <Table aria-label="BasicTable">
                                        <TableHead>
                                                  <TableRow>
                                                            <TableCell align="right">Customer</TableCell>
                                                            <TableCell align="right">Date</TableCell>
                                                            <TableCell align="right">Amount</TableCell>
                                                            <TableCell align="right">Status</TableCell>
                                                  </TableRow>
                                        </TableHead>
                                        <TableBody>
                                                  {rowData && rowData.map((row) => (
                                                            <TableRow
                                                                      key={row.id}
                                                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                      <TableCell className='cell' align="right">
                                                                                <Avatar src={row.img} />
                                                                                <Typography>{row.customer}</Typography>
                                                                      </TableCell>
                                                                      <TableCell align="right">{row.date}</TableCell>
                                                                      <TableCell align="right">{row.amount}</TableCell>
                                                                      <TableCell align="right">{row.status}</TableCell>
                                                            </TableRow>
                                                  ))}
                                        </TableBody>
                              </Table>
                    </TableContainer>
          );
}
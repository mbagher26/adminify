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



export default function BasicTable() {
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
                                                  {rows.map((row) => (
                                                            <TableRow
                                                                      key={row.calories}
                                                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                      <TableCell className='cell' align="right">
                                                                                <Avatar src='/Image/avatar.jpg' />
                                                                                <Typography>Qadir yolmeh</Typography>
                                                                      </TableCell>
                                                                      <TableCell align="right">{row.fat}</TableCell>
                                                                      <TableCell align="right">{row.carbs}</TableCell>
                                                                      <TableCell align="right">{row.protein}</TableCell>
                                                            </TableRow>
                                                  ))}
                                        </TableBody>
                              </Table>
                    </TableContainer>
          );
}
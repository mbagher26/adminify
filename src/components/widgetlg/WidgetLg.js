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

function createData(calories, fat, carbs, protein) {
          return { calories, fat, carbs, protein };
}

const rows = [
          createData(159, 6.0, 24, 4.0),
          createData(237, 9.0, 37, 4.3),
          createData(262, 16.0, 24, 6.0),
          createData(305, 3.7, 67, 4.3),
          createData(356, 16.0, 49, 3.9),
];

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
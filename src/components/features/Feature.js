import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Feature.css'

const Feature = () => {
          return (
                    <div className='feature'>
                              <Box className='featurecontent'>
                                        <Typography sx={{ fontSize: 20 }} color="rgb(76, 62, 75)">
                                                  Sales
                                        </Typography>
                                        <Box className='featurecontainer'>
                                                  <Stack className='feature-item'>
                                                            <AttachMoneyIcon fontSize='large' />
                                                            <Typography color="dark" variant='h4'>
                                                                      2.415
                                                            </Typography>
                                                  </Stack>
                                                  <Stack className='feature-item'>
                                                            <Typography color="rgb(85, 55, 62)" >
                                                                      -11.4
                                                            </Typography>
                                                            <ArrowDownwardIcon color='error' />
                                                  </Stack>
                                        </Box>
                                        <Typography variant="body2" color='rgb(144, 148, 148)'>
                                                  well meaning and kindly.
                                        </Typography>
                              </Box>
                    </div>
          )
}

export default Feature
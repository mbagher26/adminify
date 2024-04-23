import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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
                                                            {/* Sales change will be added here */}
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
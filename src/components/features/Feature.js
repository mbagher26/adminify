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
                                                  <Stack className='featureprice'>
                                                            <AttachMoneyIcon fontSize='large' />
                                                            {/* Sales price will be added here */}
                                                  </Stack>
                                                  <Stack className='featureprice'>
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
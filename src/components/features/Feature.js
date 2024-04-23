import * as React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


const Feature = () => {
          return (
                    <div className='feature'>
                              <Box className='featurecontent'>
                                        <Typography sx={{ fontSize: 20 }} color="rgb(76, 62, 75)">
                                                  Sales
                                        </Typography>
                                        <Box className='featurecontainer'>
                                                  {/* Feature container content will be added here */}
                                        </Box>
                                        <Typography variant="body2" color='rgb(144, 148, 148)'>
                                                  well meaning and kindly.
                                        </Typography>
                              </Box>
                    </div>
          )
}

export default Feature
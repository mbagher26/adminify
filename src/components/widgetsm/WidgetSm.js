import * as React from 'react';
import { List, ListItem, ListItemText, Avatar, ListItemAvatar, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidgetSm.css'

const WidgetSm = () => {
          return (
                    <div className='widgetsm'>
                              <List dense sx={{ width: '100%' }}>

                                        <Typography sx={{padding: '10px'}}>erdyctfuvygbhnj</Typography>
                                        <ListItem>
                                                  <ListItemAvatar>
                                                            <Avatar
                                                                      alt="Avatar"
                                                                      src='/Image/avatar.jpg'
                                                            />
                                                  </ListItemAvatar>
                                                  <ListItemText className='list-item-text' primary="Line item" secondary="Line item" />

                                                  <Avatar className='widgetsm-avatar'>
                                                            <VisibilityIcon />
                                                  </Avatar>
                                        </ListItem>
                              </List>
                    </div>
          )
}

export default WidgetSm
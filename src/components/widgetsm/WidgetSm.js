import * as React from 'react';
import { List, ListItem, ListItemText, Avatar, ListItemAvatar, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './WidgetSm.css'
import { useState, useEffect } from 'react';
import supabase from '../../SupabaseClient';

const WidgetSm = () => {
          const [widgetData, setWidgetData] = useState();

          useEffect(() => {
                    const fetchData = async () => {
                              const { data, erroe } = await supabase
                                        .from("newmembers")
                                        .select()
                              if (erroe) {
                                        console.log(erroe);
                              }
                              if (data) {
                                        setWidgetData(data)
                              }
                    }
                    fetchData()
          }, []);
          return (
                    <div className='widgetsm'>
                              <List sx={{ width: '100%' }}>

                                        <Typography sx={{ padding: '10px' }}>New Join Members</Typography>
                                        {widgetData && widgetData.map(data => (
                                                  <ListItem key={data.id}>
                                                            <ListItemAvatar>
                                                                      <Avatar
                                                                                alt="Avatar"
                                                                                src={data.img}
                                                                      />
                                                            </ListItemAvatar>
                                                            <ListItemText className='list-item-text' primary={data.username} secondary={data.title} />

                                                            <Avatar className='widgetsm-avatar'>
                                                                      <VisibilityIcon />
                                                            </Avatar>
                                                  </ListItem>
                                        ))}
                              </List>
                    </div>
          )
}

export default WidgetSm
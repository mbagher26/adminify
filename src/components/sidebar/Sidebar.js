import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { Stack } from '@mui/system';


export default function TemporaryDrawer() {


          const DrawerList = (
                    <>

                              <Box sx={{ padding: 0.5 }} role="presentation" >
                                        <List>
                                                  <Typography sx={{ color: 'rgb(187, 186, 186)' }} variant="p" component="p">
                                                            Dashboard
                                                  </Typography>
                                                  {['Home', 'Analytics', 'Sales'].map((text, index) => (
                                                            <Link key={text} to={text.toLocaleLowerCase() === 'home' ? 'home' : null}>
                                                                      <ListItem  disablePadding={true} dense={true}>
                                                                                <ListItemButton disableGutter dense={true}>
                                                                                          <ListItemIcon >
                                                                                                    {index === 0 && <HomeOutlinedIcon />}
                                                                                                    {index === 1 && <TimelineOutlinedIcon />}
                                                                                                    {index === 2 && <TrendingUpOutlinedIcon />}
                                                                                          </ListItemIcon>
                                                                                          <ListItemText sx={{ color: '#555'}} primary={text} />
                                                                                </ListItemButton>
                                                                      </ListItem>
                                                            </Link>
                                                  ))}
                                        </List>

                                        <List>
                                                  <Typography sx={{ color: 'rgb(187, 186, 186)' }} variant="p" component="p">
                                                            Quick Menu
                                                  </Typography>
                                                  {['Users', 'New User', 'Products', 'Transactions', 'Reports'].map((text, index) => (
                                                            <Link key={text}
                                                                      to={(text.toLowerCase() === 'users') ? 'users' :
                                                                                (text.toLowerCase() === 'products') ? 'products' :
                                                                                          (text.toLowerCase() === 'new user') ? 'newuser' : null
                                                                      }
                                                            >
                                                                      <ListItem  disablePadding={true} dense={true}>
                                                                                <ListItemButton dense={true}>
                                                                                          <ListItemIcon>
                                                                                                    <Link to='/users'>{index === 0 && <PersonOutlineOutlinedIcon />}</Link>
                                                                                                    <Link to='/newuser'>{index === 1 && <PersonOutlineOutlinedIcon />}</Link>
                                                                                                    <Link to='/products'>{index === 2 && <StorefrontOutlinedIcon />}</Link>
                                                                                                    {index === 3 && <AttachMoneyOutlinedIcon />}
                                                                                                    {index === 4 && <BarChartOutlinedIcon />}
                                                                                          </ListItemIcon>
                                                                                          <ListItemText sx={{color:'#555'}} primary={text} />
                                                                                </ListItemButton>
                                                                      </ListItem>
                                                            </Link>
                                                  ))}
                                        </List>
                                        <List>
                                                  <Typography sx={{ color: 'rgb(187, 186, 186)' }} variant="p" component="p">
                                                            Notifications
                                                  </Typography>
                                                  {['Mail', 'Feedback', 'Messages'].map((text, index) => (

                                                            <ListItem key={text} disablePadding={true} dense={true}>
                                                                      <ListItemButton dense={true}>
                                                                                <ListItemIcon>
                                                                                          {index === 0 && <MailOutlineOutlinedIcon />}
                                                                                          {index === 1 && <DynamicFeedIcon />}
                                                                                          {index === 2 && <ChatBubbleOutlineOutlinedIcon />}
                                                                                </ListItemIcon>
                                                                                <ListItemText sx={{color:'#555'}} primary={text} />
                                                                      </ListItemButton>
                                                            </ListItem>

                                                  ))}
                                        </List>
                                        <List>
                                                  <Typography sx={{ color: 'rgb(187, 186, 186)' }} variant="p" component="p">
                                                            Staff
                                                  </Typography>
                                                  {['Manage', 'Analytics', 'Reports'].map((text, index) => (

                                                            <ListItem key={text} disablePadding={true} dense={true}>
                                                                      <ListItemButton dense={true}>
                                                                                <ListItemIcon>
                                                                                          {index === 0 && <WorkOutlineIcon />}
                                                                                          {index === 1 && <TimelineOutlinedIcon />}
                                                                                          {index === 2 && <WorkOutlineIcon />}
                                                                                </ListItemIcon>
                                                                                <ListItemText sx={{color:'#555'}} primary={text} />
                                                                      </ListItemButton>
                                                            </ListItem>

                                                  ))}
                                        </List>
                              </Box>
                    </>
          );

          return (
                    <div className='saidebar'>
                              <Stack className='drawer'>
                                        {DrawerList}
                              </Stack>
                    </div>
          );
}
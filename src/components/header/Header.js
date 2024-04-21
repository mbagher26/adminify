import * as React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import './Header.css'

const Header = () => {
          return (
                    <Container fixed maxWidth='xl' className="topbar">
                              <div className="topbarwraper">
                                        <div className="topleft">
                                                  <Typography variant="h4" gutterBottom>
                                                            Adminify
                                                  </Typography>
                                                  <FavoriteIcon color='error' fontSize='large' />
                                        </div>
                                        <div className="topright">
                                                  <div className="container-icon">
                                                            <Badge badgeContent={4} color="error">
                                                                      <NotificationsNoneIcon  />
                                                            </Badge>
                                                  </div>
                                                  <div className="container-icon">
                                                            <Badge badgeContent={4} color="error">
                                                                      <SettingsIcon />
                                                            </Badge>
                                                  </div>
                                                  <div className="container-icon">
                                                            <LanguageIcon  />
                                                  </div>
                                                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </div>
                              </div>
                    </Container>
          )
}

export default Header
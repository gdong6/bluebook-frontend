import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link, useLocation, useNavigate } from "react-router-dom";
import icon from '../../images/icon.png';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  const logout = () => {
    dispatch({ type: 'LOGOUT'});
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  
  return (
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Link to="/"></Link>
          <Typography className={classes.heading} variant="h3" align="center">BlueBook</Typography>
          <img className={classes.image} src={icon} alt="icon" height="50" />
        </div>
        <Toolbar className='classes.toolbar'>
          {
            user? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
              </div>
            ) : (
              <div> 
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
  )
}

export default NavBar
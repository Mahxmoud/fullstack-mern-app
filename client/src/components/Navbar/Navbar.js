import React, { useState, useEffect } from 'react';
import {
    AppBar, Typography, Toolbar, Avatar, Button, IconButton, Collapse
} from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import * as actionType from '../../redux/constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        setChecked(true);
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location]);
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.toolbar} >
                    <h1 className={classes.appbarTitle}><span className={classes.coloredTitle}>Pi</span>Code.</h1>
                    {user?.result ? (
                        <div className={classes.profile}>
                            <div className={classes.user}>
                                <Avatar className={classes.blue} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                            </div>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                            <Button component={Link} to="/auth" variant="contained" className={classes.blue}>Sign In</Button>
                        )}
                </Toolbar>
            </AppBar>
            
            <Collapse in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}>
                <div className={classes.hero}>
                    <h1 className={classes.title}>They Deserve<br /> The <span className={classes.coloredTitle}>Best</span></h1>
                    <IconButton><ExpandMoreRoundedIcon className={classes.goDown} /></IconButton>
                </div>
            </Collapse>


        </div>
    );
};

export default Navbar;

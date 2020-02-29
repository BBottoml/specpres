import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, IconButton, Typography,  Button } from '@material-ui/core';


export default class Navbar extends Component {
    
    render() {
        return(
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Specpres 
                </Typography>
                <Button color="inherit">Get Started</Button>
            </Toolbar>
            </AppBar>
        )
    }
}
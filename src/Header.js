import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span className="header-title">Wyszukiwarka Twoich Przepisów</span>
          </Typography>
          <nav className="nav-links">
            <Button color="inherit" className="nav-link">Home</Button>
            <Button color="inherit" className="nav-link">About</Button>
            <Button color="inherit" className="nav-link">Contact</Button>
          </nav>
        </Toolbar>
      </AppBar>
      <div className="header-content">
        <h1 className="main-title">Znajdź swój ulubiony przepis!</h1>
      </div>
    </Box>
  );
}

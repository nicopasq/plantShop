import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import {FormControlLabel, IconButton, Menu, MenuItem, Switch, Toolbar } from "@mui/material";

const drawerWidth = 240;

function NavBar(){
    const [anchorEl, setAnchorEl]= useState(null);
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const links= [
      <Link id="flowers" to="/flowers">Shop</Link>,
      <Link id="cart" to="/cart">Cart</Link>,
      <Link id="addPlant" to="/flowers/new">Add Flower</Link>
    ];

    function handleOpen(e){
        if(open === false){
            setOpen(true);
        };
        setAnchorEl(e.target);
    }

    function handleClose(){
        if(open === true){
            setOpen(false);
        };
    } 

    return(
    <div>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={e => handleOpen(e)}
            sx={{ mr: 2 }}
          >
          <MenuIcon/>
          </IconButton>
          <Menu
          id="basic-menu"
          open={open}
          anchorEl={anchorEl}>
            <MenuItem onClick={handleClose}>
            <FormControlLabel 
            control={
            <Switch 
                color="secondary"
                checked={checked}
                onChange={() => setChecked(!checked)}
                />} 
            label="Editor Mode"/>
            </MenuItem>
          </Menu>
          
        </Toolbar>
        <Divider />
        <List>
          {links.map((text) => (
            <ListItem key={text.props.id} disablePadding>
              <ListItemButton onClick={() => history.push(text.props.to)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
        </Box>
    </div>
    )
}

export default NavBar;
  
  // const [anchorEl, setAnchorEl]= useState(null);
  // const [open, setOpen] = useState(false);
  // const [checked, setChecked] = useState(false);
  // const links= [
  //   <p className="linkTxt" id="Flowers" link="/">Flowers</p>,
  //   <p className="linkTxt" id="NewPlant" link="/flowers/new">Add New Plant</p>,
  //   <p className="linkTxt" id="Cart" link="/cart">Cart</p>
  // ];

  // function handleOpen(e){
  //     if(open === false){
  //         setOpen(true);
  //     };
  //     setAnchorEl(e.target);
  // }

  // function handleClose(){
  //     if(open === true){
  //         setOpen(false);
  //     };
  // }





















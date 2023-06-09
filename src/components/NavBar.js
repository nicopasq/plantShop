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
import {FormControlLabel, Switch, Toolbar } from "@mui/material";

const drawerWidth = 240;

function NavBar({enableEditor}){
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const links= [
      <Link id="flowers" to="/">Shop</Link>,
      <Link id="cart" to="/cart">Cart</Link>,
    ];

    function toggle(){
      setChecked(!checked)
      enableEditor()
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
        <Toolbar/>
        <Divider />
        <List>
          {links.map((text) => (
            <ListItem key={text.props.id} disablePadding>
              <ListItemButton onClick={() => history.push(text.props.to)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton disabled={!checked} onClick={() => history.push('/flowers/new')}>
            <Link id="addPlant" to='/flowers/new'>Add New Plant</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <FormControlLabel 
            control={
            <Switch 
                color="secondary"
                checked={checked}
                onChange={() => toggle()}
                />} 
            label="Editor Mode"/>
          </ListItem>
        </List>
      </Drawer>
        </Box>
    </div>
    )
}

export default NavBar;
import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

export  function Navbar() {
    const [Open, setOpen] = useState(false);
    const Theme = useTheme();
    const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));
    const MenuItem = ['About', 'Services', 'Projects', 'Contacts']

  return (
    <>
        <AppBar elevation={0} className='Navbar' position='static' sx={{backgroundColor:"white", color:"black", borderBottom:"1px solid #f2f2f2"}}>
            <Toolbar>
                {isMobile ? (
                    <div>
                        <IconButton color='inharit' onClick={()=> setOpen(true)}>
                            <MenuIcon/>
                        </IconButton>
                    </div>
                ):(
                    <>
                        <Typography sx={{flexGrow:1}}>
                            <img src="/logo.png" alt="logo" />
                        </Typography>
                        {MenuItem.map((item)=>(
                        <Button color='inharit' key={item} sx={{px:"15px"}}>{item}</Button>                
                        ))}
                        <Button variant='outlined' sx={{
                            color:"#ef3612",
                            backgroundColor:"white",
                            borderRadius:"10px",
                            margin:"0 10px",
                            "&:hover":{
                                color:"white",
                                backgroundColor:"#ef3612",
                            }
                        }}>Sign UP</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
        <Drawer anchor='left' open={Open} onClick={()=>setOpen(false)}>
                <List>
                    {MenuItem.map((item)=>(
                        <ListItem Button key={item} onClick={()=>setOpen(false)}>
                            <ListItemText>{item}</ListItemText>
                        </ListItem>
                    ))}
                </List>
                <ListItem Button ><ListItemText primary="Sign Up"/></ListItem>
            
        </Drawer>
    </>
  );
}


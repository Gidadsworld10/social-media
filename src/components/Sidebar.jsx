import {  Home, House, ModeNight, Pages, Person2, Person2Rounded,  Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode, setMode}) => {
  return (
    <Box 
      flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
        <Box position="fixed">
        <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#pages'>
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#friends'>
            <ListItemIcon>
              <Person2 />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#market'>
            <ListItemIcon>
              <House />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#settings'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#profile'>
            <ListItemIcon>
              <Person2Rounded />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={ e=> setMode( mode === "dark" ? "light" : "dark")} />
          </ListItemButton>
        </ListItem>
      </List>
        </Box>
      
    </Box>
  )
}

export default Sidebar
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",

}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: 'space-between',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }


}));


const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: 'space-between',
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }



}));

const Navbar = () => {
  const  [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          GIDADO
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search bgcolor={"background.default"} color={"text.primary"} ><InputBase placeholder='Search....'></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{
            width: "30px",
            height: "30px"
          }}
            src="C:/Users/LENOVO/Desktop/Some_img/IMG_7741.jpeg" 
            onClick={e=>setOpen(true)}
            
            />
        </Icons>
        <UserBox>
        <Avatar sx={{
            width: "30px",
            height: "30px"
          }}
            src="C:/Users/LENOVO/Desktop/Some_img/IMG_7741.jpeg"
            onClick={e=>setOpen(true)}
          
            />
            <Typography variant='span'>Gidado</Typography>
           
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
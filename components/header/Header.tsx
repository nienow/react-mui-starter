import React from "react";
import {AppBar, Button, IconButton, styled, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
`;

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <Menu></Menu>
        </IconButton>
        <HeaderTitle variant="h6">
          News
        </HeaderTitle>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header

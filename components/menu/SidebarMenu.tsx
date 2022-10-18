import React, {useState} from 'react';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {BedroomParent, ExpandLess, ExpandMore, Help, Home, TextFields} from "@mui/icons-material";
import styled from "@emotion/styled";
import {useRouter} from "next/router";

const SidebarList = styled(List)`
  border-right: 1px solid #aaa;
  min-width: 200px;
`;

const SidebarMenu = () => {
  const router = useRouter();
  const [parentOpen, setParentOpen] = useState(false);

  const goTo = (url) => {
    router.push(url)
  };

  return (
    <SidebarList>
      <ListItemButton onClick={() => goTo('/')}>
        <ListItemIcon><Home></Home></ListItemIcon>
        <ListItemText>Home</ListItemText>
      </ListItemButton>
      <ListItemButton onClick={() => goTo("/form")}>
        <ListItemIcon><TextFields></TextFields></ListItemIcon>
        <ListItemText>Form</ListItemText>
      </ListItemButton>
      <ListItemButton onClick={() => goTo("/about")}>
        <ListItemIcon><Help></Help></ListItemIcon>
        <ListItemText>About</ListItemText>
      </ListItemButton>
      <ListItemButton onClick={() => setParentOpen(!parentOpen)}>
        <ListItemIcon><BedroomParent></BedroomParent></ListItemIcon>
        <ListItemText>Parent</ListItemText>
        {parentOpen ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={parentOpen} unmountOnExit>
        <List>
          <ListItemButton sx={{pl: 8}}>
            <ListItemText>Child One</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </SidebarList>
  );
}

export default SidebarMenu

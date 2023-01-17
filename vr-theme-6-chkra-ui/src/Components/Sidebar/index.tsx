import * as React from "react";
import { Image, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  dashboardIcon,
  maintenanceIcon,
  offerIcon,
  salesIcon,
  settingsIcon,
  userIcon,
} from "../../assets/images";
import gsap from "gsap";

const { useLayoutEffect } = React;

const Sidebar: React.FC = () => {
  //GSAP Animation
  useLayoutEffect(() => {
    gsap.fromTo(
      ".sidebar li a",
      {
        opacity: 0,
        x: -40,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
      }
    );
  }, []);
  function closeSidebar() {
    document.body.classList.remove("open-sidebar");
  }

  return (
    <>
      <List className="sidebar">
        <ListItem>
          <NavLink
            to="/dashboard"
            title="Dashboard"
            className="nav-link"
            onClick={closeSidebar}
          >
            <Image src={dashboardIcon} alt="Dashboard" />
            <Text as="span">Dashboard</Text>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/innerpage"
            title="User"
            className="nav-link"
            onClick={closeSidebar}
          >
            <Image src={userIcon} alt="User" />
            <Text as="span">User</Text>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/"
            title="Maintenance"
            className="nav-link"
            onClick={closeSidebar}
          >
            <Image src={maintenanceIcon} alt="Maintenance" />
            <Text as="span">Maintenance</Text>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/"
            title="Offers"
            className="nav-link"
            onClick={closeSidebar}
          >
            <Image src={offerIcon} alt="Offers" />
            <Text as="span">Offers</Text>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/"
            title="Sales"
            className="nav-link"
            onClick={closeSidebar}
          >
            <Image src={salesIcon} alt="Sales" />
            <Text as="span">Sales</Text>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/"
            title="Settings"
            className="nav-link"
            onClick={closeSidebar}
          >
            <Image src={settingsIcon} alt="Settings" />
            <Text as="span">Settings</Text>
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};
export default Sidebar;

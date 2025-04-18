import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Container } from "@mui/material";

import logo from "../../images/logo.jpg";

import "./Navbar.scss";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  {
    id: 1,
    link: (
      <a className="navItems" href="#poster">
        HOME
      </a>
    ),
  },
  {
    id: 2,
    link: (
      <a className="navItems" href="#features">
        FEATURES
      </a>
    ),
  },
  {
    id: 7,
    link: (
      <a className="navItems" href="#skills">
        SKILLS
      </a>
    ),
  },
  {
    id: 3,
    link: (
      <a className="navItems" href="#portfolio">
        PORTFOLIO
      </a>
    ),
  },
  {
    id: 4,
    link: (
      <a className="navItems" href="#resume">
        RESUME
      </a>
    ),
  },
  // {
  //   id: 5,
  //   link: (
  //     <a className="navItems" href="#resume">
  //       PUBLICATION
  //     </a>
  //   ),
  // },
  {
    id: 6,
    link: (
      <a className="navItems" href="#contact">
        CONTACTS
      </a>
    ),
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#212428", height: "100vh" }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{ width: 40, height: 40, marginBottom: "1px" }}
        />
        Rehan
      </Typography>
      <Divider sx={{ background: "#fff" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#212428" }}>
        <Container>
          <Toolbar
            sx={{
              // backgroundColor: "red",
              px: {
                xs: 0,
                sm: 0,
              },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component={Link}
              to={"/"}
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                display: {
                  lg: "flex",
                  alignItems: "center",
                  gap: 10,
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <Avatar alt="Rehan" src={logo} sx={{ width: 40, height: 40 }} />
              <span
                style={{
                  color: "#ff014f",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                }}
              >
                Rehan
              </span>
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "block", lg: "flex", gap: 20 } }}
            >
              {navItems.map((item) => (
                <div key={item.id}>{item.link}</div>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

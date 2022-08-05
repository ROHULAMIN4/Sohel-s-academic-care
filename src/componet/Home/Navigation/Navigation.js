import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "./navigation.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Login");
  }
  function dashoard() {
    navigate("/Teacher");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            className="nav"
            variant="small"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Sohel`s Academic Care
          </Typography>
          <Button onClick={dashoard} color="inherit">
            dashbord
          </Button>

          {/* <Button onClick={handleClick} color="inherit">
            Login
          </Button> */}
          {user?.email ? (
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          ) : (
            <Button onClick={handleClick} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;

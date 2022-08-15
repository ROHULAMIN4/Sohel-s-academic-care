import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();
  function handleClick() {
    navigate("/Login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="nav"
            variant="small"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Sohel`s Academic Care
          </Typography>

          {user?.email ? (
            <Button onClick={logOut} color="inherit">
              <span className="nav-login">
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                ></FontAwesomeIcon>
                {user?.displayName}
              </span>
            </Button>
          ) : (
            <Button onClick={handleClick} color="inherit">
              <span className="nav-login">
                {" "}
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                ></FontAwesomeIcon>
                Login
              </span>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
//  <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
export default Navigation;

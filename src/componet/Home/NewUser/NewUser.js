import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import img2 from "../../../images/img/img2.webp";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Resiger = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate("/login");
  };
  const [loginData, setLoginData] = useState({});
  const { register, islogin, user, authError } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const haldleonSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password didn`t math !",
        showConfirmButton: true,
      });
      // alert("didn`t math");
      return;
    }
    register(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Typography
        style={{ fontSize: "20px", fontWeight: "900", textAlign: "center" }}
      >
        Registration
      </Typography>
      <Grid sx={{ mt: 4 }} container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <img style={{ width: "70%" }} src={img2} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {!islogin && (
            <form onSubmit={haldleonSubmit}>
              <TextField
                id="standard-basic"
                //
                label="Your Name"
                variant="standard"
                name="name"
                onBlur={handleOnBlur}
                required
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                required
                id="standard-basic"
                label="Your Email"
                variant="standard"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                required
                id="standard-basic"
                label=" Password"
                variant="standard"
                name="password"
                onBlur={handleOnBlur}
                type="password"
                sx={{ width: "75%", m: 1 }}
              />{" "}
              <TextField
                required
                id="standard-basic"
                label="Confirm Password"
                variant="standard"
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                sx={{ width: "75%", m: 1 }}
              />{" "}
              {/* select form */}
              <br />
              <br />
              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Sign Up
              </Button>{" "}
              <br /> <br />
              <Button onClick={handleClick}>
                Already register ? please Login
              </Button>
            </form>
          )}
          {islogin && <CircularProgress color="success" />}

          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resiger;

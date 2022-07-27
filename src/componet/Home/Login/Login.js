import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import img1 from "../../../images/img/img1.jpg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navgate = useNavigate();
  const handleClick = () => {
    navgate("/register");
  };
  const [loginData, setLoginData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const haldleonSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Typography
        style={{ fontSize: "20px", fontWeight: "900", textAlign: "center" }}
      >
        Sign In form
      </Typography>
      <Grid sx={{ mt: 4 }} container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <img style={{ width: "50%" }} src={img1} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <form onSubmit={haldleonSubmit}>
            <TextField
              id="standard-basic"
              label="Your Email"
              variant="standard"
              name="email"
              onBlur={handleOnBlur}
              sx={{ width: "75%", m: 1 }}
            />
            <TextField
              id="standard-basic"
              label="Your Password"
              variant="standard"
              name="password"
              onBlur={handleOnBlur}
              type="password"
              sx={{ width: "75%", m: 1 }}
            />{" "}
            <br />
            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
              Sign Up
            </Button>
            <br /> <br />
            <Button onClick={handleClick}>New user ? please register</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

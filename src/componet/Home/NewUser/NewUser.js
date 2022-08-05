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
    register(loginData.email, loginData.password, navigate);
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
                label="Student Name"
                variant="standard"
                name="name"
                onBlur={handleOnBlur}
                required
                sx={{ width: "75%", m: 1 }}
              />
              {/* <TextField
                required
                id="standard-basic"
                label="Father`s name"
                variant="standard"
                name="father name"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
              /> */}
              {/* <TextField
                required
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                name="phone"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
              /> */}
              {/* <TextField
                required
                id="standard-basic"
                label="Address"
                variant="standard"
                name="Address"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
              /> */}
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
                label="Your Password"
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
              <p
                style={{
                  marginBottom: "-1px",
                  marginTop: "-2px",
                  fontWeight: "600",
                  color: "tomato",
                }}
              >
                Class
              </p>
              {/* <input
                type="Number"
                required
                name="Class"
                Label="Class"
                onBlur={handleOnBlur}
                style={{
                  width: "73%",
                  padding: "5px",
                  borderRadius: "5px",
                  borderColor: "2px solid tomato",
                }}
              /> */}
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
          {/* {user?.email &&
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Congratulation Your order successfully !",
              showConfirmButton: false,
              timer: 1300,
            })} */}

          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resiger;

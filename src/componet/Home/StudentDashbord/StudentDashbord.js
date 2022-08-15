import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
  InputLabel,
  CircularProgress,
  MenuItem,
  Select,
} from "@mui/material";
import Swal from "sweetalert2";
const StudentDashbord = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const haldleonSubmit = (e) => {
    fetch("http://localhost:5000/student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Success!",
            "Information submitted successfully.",
            "success"
          );
        } else {
          Swal.fire("error!", "something went wrong", "erroe");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <Typography
          style={{ fontSize: "20px", fontWeight: "900", textAlign: "center" }}
        >
          Student Information form
        </Typography>
        <Grid sx={{ mt: 4 }} container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <img
              style={{ width: "75%" }}
              src="https://i.postimg.cc/mZPjzRxN/Data-security-05.jpg"
              alt=""
            />
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
              <TextField
                required
                id="standard-basic"
                label="Father`s name"
                variant="standard"
                name="father name"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                required
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                name="phone"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                required
                id="standard-basic"
                label="Address"
                variant="standard"
                name="Address"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
              ></TextField>
              <InputLabel id="demo-simple-select-standard-label">
                Class
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={age}
                name="class"
                onBlur={handleOnBlur}
                label="class"
                sx={{ width: "75%", m: 1 }}
              >
                <MenuItem value={6}>SIX</MenuItem>
                <MenuItem value={7}>SEVEN</MenuItem>
                <MenuItem value={8}>EIGHT</MenuItem>
                <MenuItem value={9}>NINE</MenuItem>
                <MenuItem value={10}>TEN</MenuItem>
              </Select>
              <br />
              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
              <br /> <br />
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default StudentDashbord;

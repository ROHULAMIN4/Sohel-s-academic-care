import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Result from "@mui/icons-material/PersonSearchOutlined";
import Images from "@mui/icons-material/PermMediaOutlined";
import About from "@mui/icons-material/InsertDriveFileOutlined";
import Dashboard from "@mui/icons-material/SettingsOutlined";
import "./IconBar.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const IconBar = () => {
  const { user } = useAuth();
  const Check = user.email;
  console.log(Check);
  const naviget = useNavigate();
  function ParentDashbord() {
    naviget("/dashbord");
  }
  function dashbordStudent() {
    naviget("/dashbordStudent");
  }
  function event() {
    naviget("/event");
  }
  function result() {
    naviget("/result");
  }
  function about() {
    naviget("/about");
  }
  function home() {
    naviget("/");
  }

  function target() {}
  return (
    <div className="Parent-icon">
      <p>
        <HomeIcon onClick={home} className="Icon-styles"></HomeIcon>
        <span onClick={home} className="Icon-name">
          Home
        </span>
      </p>
      <p>
        <Result onClick={result} className="Icon-styles"></Result>
        <span onClick={result} className="Icon-name">
          Result
        </span>
      </p>
      <p>
        <Images onClick={event} className="Icon-styles"></Images>
        <span onClick={event} className="Icon-name">
          Event
        </span>
      </p>
      <p>
        <About onClick={about} className="Icon-styles"></About>
        <span onClick={about} className="Icon-name">
          About us
        </span>
      </p>
      {/* admin */}

      {Check === "rohulamin131650@gmail.com" ||
      Check === "rhs06@yahoo.com" ||
      Check === "md.sajibkhan199413@gmail.com" ||
      Check === "armustakim7@gmail.com" ||
      Check === "mdb38617@gmail.com" ||
      Check === "kakuleakter7069@gmail.com" ||
      Check === "kornia01@gmail.com" ||
      Check === "arifulhaque2251@gmail" ||
      Check === "seetolakhter@gmail.com" ? (
        <p>
          <Dashboard
            onClick={ParentDashbord}
            className="Icon-styles"
          ></Dashboard>
          <span className="Icon-name">
            <span onClick={ParentDashbord} className="Icon-name">
              Dashbord
            </span>
          </span>
        </p>
      ) : (
        <p>
          <Dashboard
            onClick={dashbordStudent}
            className="Icon-styles"
          ></Dashboard>
          <span className="Icon-name">
            <span onClick={dashbordStudent} className="Icon-name">
              Dashbord
            </span>
          </span>
        </p>
      )}

      {/* <p>
        {" "}
        <Dashboard
          onClick={ParentDashbord}
          className="Icon-styles"
        ></Dashboard>{" "}
        <span className="Icon-name">
          {" "}
          <span onClick={ParentDashbord} className="Icon-name">
            Dashbord //{" "}
          </span>{" "}
        </span>{" "}
      </p> */}

      {/* student */}
      {/* <p>
        <Dashboard
          onClick={dashbordStudent}
          className="Icon-styles"
        ></Dashboard>
        <span className="Icon-name">
          <span onClick={dashbordStudent} className="Icon-name">
            SDashbord
          </span>
        </span>
      </p> */}
    </div>
  );
};

export default IconBar;

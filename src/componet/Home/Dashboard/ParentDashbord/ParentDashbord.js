import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ParentDashbord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faImage,
  faSquarePollVertical,
  faArrowRight,
  faDashboard,
  faFile,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";

const ParentDashbord = () => {
  return (
    <>
      <div className="main-dash">
        <div className="sidebar-dash">
          {/* email and photos */}
          <Link to="/dashbord" class="active">
            <FontAwesomeIcon className="fs-icon" icon={faHome} />
            <span className="dashbord-styles">Home</span>
          </Link>
          <Link to="/dashbord/manageresult">
            <FontAwesomeIcon
              className="fs-icon"
              icon={faSquarePollVertical}
            ></FontAwesomeIcon>
            <span className="dashbord-styles"> Result</span>
          </Link>

          <Link to="/dashbord/manageiamges">
            <FontAwesomeIcon
              className="fs-icon"
              icon={faImage}
            ></FontAwesomeIcon>
            <span className="dashbord-styles"> Photos</span>
          </Link>
          <Link to="/dashbord/teacher-info">
            <FontAwesomeIcon
              className="fs-icon"
              icon={faFile}
            ></FontAwesomeIcon>
            <span className="dashbord-styles"> Teacher</span>
          </Link>
          <Link to="/dashbord/manageiamges">
            <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
            {/* <Button onClick={logOut} className="singUp-btn">
            
            </Button> */}
          </Link>
        </div>
        <div className="content-dash">
          <p>
            <Outlet></Outlet>
          </p>
        </div>
      </div>
    </>
  );
};

export default ParentDashbord;

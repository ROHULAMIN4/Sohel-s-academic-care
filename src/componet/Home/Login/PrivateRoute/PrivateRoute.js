import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, islogin } = useAuth();
  const location = useLocation();
  if (islogin) {
    return <CircularProgress color="success" />;
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location }} replace />;
};

export default PrivateRoute;

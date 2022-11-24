import React from "react";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../services";

export default function PrivateRoute({ children }) {

  if (!checkAuth()) {
    return  <Navigate to="/login" replace={true} />
  }

  return children;
}

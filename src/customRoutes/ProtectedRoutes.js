import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const checkAuth = () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return false;
    }
    return true;
  };

  if (!checkAuth()) {
    return  <Navigate to="/login" replace={true} />
  }

  return children;
}

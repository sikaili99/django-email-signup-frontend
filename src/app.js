import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./customRoutes/ProtectedRoutes";
import ChangePassword from "./components/auth/ChangePassword";
import PasswordReset from "./components/auth/PasswordRest";
import Register from "./components/auth/Register";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import { history } from "./index";
import Profile from "./components/Profile";

const App = () => {
    return (
        <Router history={history}>
            <div>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/signout" render={() => <Navigate to="/" />} />
                    <Route exact path="/changepassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
                    <Route exact path="/passwordreset" element={<PasswordReset />} />
                </Routes>
            </div>
    </Router>
    )
}
export default App;

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
import UserDetails from "./components/UserDetails";
import ProfileSettings from "./components/ProfileUpdate";
import EmailVerify from "./pages/EmailVerify";

const App = () => {
    return (
        <Router history={history}>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                <Route exact path="/:token" element={<EmailVerify />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/details" element={<PrivateRoute><UserDetails /></PrivateRoute>} />
                <Route exact path="/profile" element={<PrivateRoute><ProfileSettings /></PrivateRoute>} />
                <Route exact path="/signout" render={() => <Navigate to="/" />} />
                <Route exact path="/changepassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
                <Route exact path="/passwordreset" element={<PasswordReset />} />
            </Routes>
    </Router>
    )
}
export default App;

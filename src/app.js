import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthenticatedRoute } from "./customRoutes/ProtectedRoutes";
import ChangePassword from "./components/auth/ChangePassword";
import PasswordReset from "./components/auth/PasswordRest";
import Register from "./components/auth/Register";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import { history } from "./index";


function App() {

    return (
        <Router history={history}>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <AuthenticatedRoute exact path="/login" component={Login} />
                    <AuthenticatedRoute exact path="/register" component={Register} />
                    <Route exact path="/signout" render={() => <Redirect to="/" />} />
                    <Route exact path="/changepassword" component={ChangePassword} />
                    <Route exact path="/passwordreset" component={PasswordReset} />
                </Switch>
            </div>
    </Router>
    )
}

export default App;
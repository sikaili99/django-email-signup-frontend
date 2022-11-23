import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, authenticateAction } from '../../actions/auth/authActions';
import CustomLoader from '../loader';

const Login = () => {
  const { loading } = useSelector(state=>state.auth);
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    dispatch(loginAction(data)).then(response => {
      dispatch(authenticateAction(response.data,dispatch,location,navigate));
    })

  };
  return (
      <div className="Auth-form-container">
        <CustomLoader loading={loading}>
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                {...register("phonenumber")}
                type="text"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                {...register("password")}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
        </CustomLoader>
      </div>
    )
}
  

  export default  Login;
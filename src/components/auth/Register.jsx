import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import createUser from '../../actions/users/userCreate';
import CustomLoader from '../loader';

const Register = () => {

  const { loading } = useSelector(state=>state.users);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (values) => {
    dispatch(createUser(navigate,values));
  };


  return (
    <div className="Auth-form-container">
      <CustomLoader loading={loading}>
      <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              {...register("first_name")}
              type="text"
              className="form-control mt-1"
              placeholder="First name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              {...register("last_name")}
              type="text"
              className="form-control mt-1"
              placeholder="Last"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              {...register("email")}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone number</label>
            <input
              {...register("phone_number")}
              type="text"
              className="form-control mt-1"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group mt-3">
            <label>communities</label>
            <input
              {...register("communities")}
              type="text"
              className="form-control mt-1"
              placeholder="communities"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              {...register("password")}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
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

  export default Register;

import React from 'react';

const ChangePassword = () => {

    return (
      <form>
        <h3>Change Password</h3>
        <div className="mb-3">
          <label>Old password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter old password"
          />
        </div>
        <div className="mb-3">
          <label>New password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }

  export default ChangePassword;

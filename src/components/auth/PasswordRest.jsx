import React from 'react';

const PasswordReset = () => {

    return (
      <form>
        <h3>Password Reset</h3>
        <div className="mb-3">
          <label>Email Addree</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }

export default PasswordReset;

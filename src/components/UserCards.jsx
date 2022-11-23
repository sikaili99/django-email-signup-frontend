import axios from "axios";
import React, { useState, useEffect } from "react";

const UserCards = () => {
    let data = []
    const loadMore = () =>{
        // API call
    }
    return (
      <div className="clearfix">
        <div className="row">
          {data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.profile.picture}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {uppercase(data.name.first) +
                      " " +
                      uppercase(data.name.last)}
                  </h5>
                  <p className="card-text">
         
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={e => {
            loadMore();
          }}
        >
          Load More Users
        </button>
      </div>
    );
  }

export default UserCards;

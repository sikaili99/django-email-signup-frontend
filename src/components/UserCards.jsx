import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions/users/listUsers";
import CustomLoader from "./loader";

const UserCards = () => {
  const  { users, loading } = useSelector((state) => state.users);
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUserDelete = (id) => {
    dispatch(deteleUser(id));
  };

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  const uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };


  const loadMore = () => {
    dispatch(fetchUsers);
  };

    return (
      <div className="clearfix">
        <CustomLoader loading={loading}>
        <div className="row">
          {users.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value} style={{cursor: "default"}}>
              <div className="card">
                <div className="card-body" onClick={()=>{navigate(`/profile/`)}}>
                  <div className="avatar">
                    <img
                      src={data?.picture?.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {uppercase(data?.name?.first) +
                      " " +
                      uppercase(data?.name?.last)}
                  </h5>
                  <p className="card-text">
                    {data?.location?.city +
                      ", " +
                      uppercase(data?.location?.state)}
                    <br />
                    <span className="phone">{data?.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!loading && <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={e => {
            loadMore();
          }}
        >
          Load More Users
        </button>}
    
        </CustomLoader>
      </div>
    );
  }

export default UserCards;

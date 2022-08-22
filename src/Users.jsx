import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  let [count, setCount] = useState(0);
  let [users, setusers] = useState([]);
  let [isLoading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setusers(users);
  }, [count]);

  let loadData = async () => {
    try {
      setLoading(true);
      let users = await axios.get(
        "https://630237d8c6dda4f287b56f17.mockapi.io/users"
      );
      setusers(users.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  let userDelete = async (id) => {
    try {
      await axios.delete(
        `https://630237d8c6dda4f287b56f17.mockapi.io/users/${id}`
      );
      let deleteIndex = users.findIndex((user) => {
        return user.id === id;
      });
      users.splice(deleteIndex, 1);
      setCount((c) => c + 1);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/portal/create-user"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">All users</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.age}</td>
                        <td>{user.startdate}</td>
                        <td>{user.salary}</td>
                        <td>
                          <Link
                            to={`/portal/users/view/${user.id}`}
                            className="btn btn-primary mr-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/users/edit/${user.id}`}
                            className="btn btn-warning mr-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => userDelete(user.id)}
                            className="btn btn-danger mr-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;

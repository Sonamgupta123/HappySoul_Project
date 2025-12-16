import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDash.css";

function AdminDash() {
   const name = localStorage.getItem("name") || "User";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/fetch") // <-- apna route laga dena
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="admin-dashboard container mt-4">
      <div className="welcome-card shadow-sm">
        <h2>Welcome,{name}! Admin 👋</h2>
        <p>You are managing the HappySoul user system.</p>
      </div>

      <div className="stats-card shadow-sm">
        <h4>Total Registered Users</h4>
        <p className="count">{users.length}</p>
      </div>

      <h3 className="mt-4 mb-3">User Details</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-success">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((u, index) => (
                <tr key={index}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.mobile}</td>
                  <td>{u.city}</td>
                  <td>{u.age}</td>
                  <td>{u.gender}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No users found...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDash;

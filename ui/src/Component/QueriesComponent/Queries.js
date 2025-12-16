import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Queries.css";

function ContactQueries() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/contact/fetch") // <-- apna route lagao
      .then((res) => setQueries(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="queries container mt-4">
      <h2 className="text-center mb-4">User Contact Queries</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-success">
            <tr>
              <th>Name</th>
              <th>Email</th>
              
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {queries.length > 0 ? (
              queries.map((q, i) => (
                <tr key={i}>
                  <td>{q.firstName}</td>
                  <td>{q.email}</td>
                 
                  <td>{q.message}</td>
                  <td>{new Date(q.createdAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No queries found...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactQueries;

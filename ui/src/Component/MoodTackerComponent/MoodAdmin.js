import { useEffect, useState } from "react";
import axios from "axios";
import "./MoodAdmin.css";

function AdminMoodTracker() {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);

 

 useEffect(() => {
  axios
    .get("http://localhost:3001/mood/admin/all")
    .then((res) => {
      setMoods(res.data.moods);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, []);


  return (
    <div className="mood-container">
      <h2 className="title">User Mood Tracker</h2>

      {loading ? (
        <p className="loading">Loading mood data...</p>
      ) : moods.length === 0 ? (
        <p className="no-data">No mood entries found.</p>
      ) : (
        <table className="mood-table">
          <thead>
            <tr>
              <th>Mood</th>
              <th>Emoji</th>
              <th>User ID</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {moods.map((m, index) => (
              <tr key={index}>
                <td>{m.mood}</td>
                <td>{m.emoji}</td>
                <td>{m.userId}</td>
                <td>{new Date(m.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminMoodTracker;

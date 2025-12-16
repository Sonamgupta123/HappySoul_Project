import "./AdminPassword.css";
import { useState } from "react";
import axios from "axios";
import { userApi } from "../../apiurl";
import { useNavigate } from "react-router-dom";

function AdminProfile() {
  const [output, setOutput] = useState("");
  const [opass, setOPass] = useState("");
  const [npass, setNPass] = useState("");
  const [cnpass, setCnPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const email = localStorage.getItem("email");   // ✅ admin email bhi yahin stored hai

    if (!opass || !npass || !cnpass) {
      setOutput("All fields are required");
      return;
    }

    if (npass !== cnpass) {
      setOutput("New password and confirm password do not match");
      return;
    }

    // STEP 1: verify old password
    axios
      .get(`${userApi}fetch?email=${email}&password=${opass}`)
      .then((response) => {
        if (response.data.length > 0) {

          const updateDetail = {
            condition_obj: { email },
            content_obj: { password: npass }
          };

          // STEP 2: update password
          axios
            .patch(`${userApi}update`, updateDetail)
            .then(() => {
              alert("Admin password changed successfully ✅");
              setOPass("");
              setNPass("");
              setCnPass("");
              navigate("/admin");   // 🔥 admin dashboard
            })
            .catch(() => setOutput("Failed to update password"));
        } else {
          setOutput("Old password is incorrect");
        }
      })
      .catch(() => setOutput("Server error"));
  };

  return (
    <div className="cpadmin-container">
      <h2 className="form-title">Admin Change Password</h2>

      {output && <div className="output-msg">{output}</div>}

      <form className="cpadmin-form">
        <label>Old Password</label>
        <input
          type="password"
          value={opass}
          onChange={(e) => setOPass(e.target.value)}
        />

        <label>New Password</label>
        <input
          type="password"
          value={npass}
          onChange={(e) => setNPass(e.target.value)}
        />

        <label>Confirm New Password</label>
        <input
          type="password"
          value={cnpass}
          onChange={(e) => setCnPass(e.target.value)}
        />

        <button type="button" onClick={handleSubmit}>
          Change Password
        </button>
      </form>
    </div>
  );
}

export default AdminProfile;

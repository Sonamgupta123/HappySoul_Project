import { useEffect, useState } from "react";
import axios from "axios";
import { userApi } from "../../apiurl";
import "./AdminEditP.css";
import { useNavigate } from "react-router-dom";

function EditAdmin() {
  const navigate = useNavigate();
  const [output, setOutput] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    city: "",
    about: "",
  });

  const email = localStorage.getItem("email"); // ✅ admin email bhi yahin stored

  // 🔹 Fetch admin data
  useEffect(() => {
    axios
      .get(`${userApi}fetch?email=${email}`)
      .then((res) => {
        if (res.data.length > 0) {
          setForm(res.data[0]);
        }
      })
      .catch(() => {
        setOutput("Failed to load admin details");
      });
  }, [email]);

  // 🔹 Update admin profile
  const handleSubmit = () => {
    const updateDetail = {
      condition_obj: { email },
      content_obj: {
        name: form.name,
        mobile: form.mobile,
        age: form.age,
        gender: form.gender,
        city: form.city,
        about: form.about,
      },
    };

    axios
      .patch(`${userApi}update`, updateDetail)
      .then(() => {
        alert("Admin profile updated successfully ✅");
        navigate("/admin"); // 🔥 back to admin dashboard
      })
      .catch(() => {
        setOutput("Failed to update admin profile");
      });
  };

  return (
    <div className="edit-container">
      <h2 className="edit-title">Edit Admin Profile</h2>

      {output && <div className="edit-error">{output}</div>}

      <form className="edit-form">
        <label>Name:</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label>Email (not editable):</label>
        <input type="email" value={form.email} disabled />

        <label>Mobile:</label>
        <input
          type="text"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />

        <label>Age:</label>
        <input
          type="number"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <label>Gender:</label>
        <select
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>City:</label>
        <input
          type="text"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />

        <label>About:</label>
        <textarea
          value={form.about}
          onChange={(e) => setForm({ ...form, about: e.target.value })}
        />

        <button type="button" onClick={handleSubmit}>
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default EditAdmin;

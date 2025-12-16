import "./Registration.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [output, setOutput] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    age: "",
    gender: "",
    city: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, password, mobile, age, gender, city, about } = form;

    if (!name || !email || !password || !mobile || !age || !gender || !city)
      return setOutput("⚠ Please fill all required fields.");

    if (password.length < 5 || password.length > 10)
      return setOutput("⚠ Password must be 5–10 characters.");

    axios
      .post("http://localhost:3001/user/register", form)
      .then(() => {
        setOutput("✔ Registration Successful! ");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch(() => setOutput("❌ Registration Failed. Try Again."));
  };

  return (
    <div className="register-container container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="form-card register-form-card bg-white p-4 shadow rounded">
            {output && <div className="alert alert-info">{output}</div>}

            <h2 className="mb-4 text-center">Registration</h2>

            <form>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Mobile</label>
                  <input
                    className="form-control"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Age</label>
                  <input
                    className="form-control"
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Gender</label>
                  <select
                    className="form-control"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>City</label>
                  <select
                    className="form-control"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                  >
                    <option value="">Select City</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Ujjain</option>
                    <option>Dewas</option>
                  </select>
                </div>

                <div className="col-12 mb-3">
                  <label>About You</label>
                  <textarea
                    className="form-control"
                    name="about"
                    placeholder="Write briefly about your mental health goals..."
                    value={form.about}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button type="button" className="btn btn-brownish-red w-100" onClick={handleSubmit}>
                Register
              </button>

              <div className="text-center mt-3">
                Already Registered? <Link to="/login">Login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

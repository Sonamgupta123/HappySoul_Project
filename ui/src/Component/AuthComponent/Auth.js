import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // 🔴 ADMIN PROTECTED ROUTES
    if (
      path === "/admin" ||
      path === "/queries" ||
      path === "/mood-tracker" ||
      path === "/admin-profile"
    ) {
      if (!token || role !== "admin") {
        navigate("/login");
      }
    }

    // 🔵 USER PROTECTED ROUTES
    else if (
      path === "/user" ||
      path === "/edit-profile" ||
      path === "/change-password" ||
      path === "/user-activities"
    ) {
      if (!token || role !== "user") {
        navigate("/login");
      }
    }

    // 🟢 PUBLIC ROUTES
    else {
      // kuch bhi mat karo
    }
  }, [navigate]);

  return null;
}

export default Auth;

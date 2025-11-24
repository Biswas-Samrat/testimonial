import React, { useState } from "react"; // 1. Import useState
import { useTranslation } from "../../hooks/useTranslation";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  const { t } = useTranslation();
  const purpleColor = "#7357FE";
  
  // 1. State to manage password visibility
  const [showPassword, setShowPassword] = useState(false); 
  
  // 2. Function to toggle the state
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white">
      <div className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-2">{t("Sign Up For Free")} 😊</h2>

        <div className="d-flex align-items-center mb-4">
          <hr className="flex-grow-1 border-secondary" />
          <hr className="flex-grow-1 border-secondary" />
        </div>

        <form
          style={{
            backgroundColor: "#323539ff",
            padding: "60px",
            borderRadius: "10px",
          }}
        >
          {/* First Name Input (no change) */}
          <div className="mb-3">
            <label className="form-label small text-secondary">
              First name *
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your first name"
              />
              <span className="input-group-text bg-white border-left-0 text-secondary">
                <i className="far fa-user"></i>
              </span>
            </div>
          </div>

          {/* Email Input (no change) */}
          <div className="mb-3">
            <label className="form-label small text-secondary">Email *</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input (UPDATED) */}
          <div className="mb-4">
            <label className="form-label small text-secondary">
              Password *
            </label>
            <div className="input-group">
              <input
                // 3. Dynamic input type based on showPassword state
                type={showPassword ? "text" : "password"} 
                className="form-control"
                placeholder="Password"
              />
              {/* 7. Font Awesome Icon for Password Toggle (UPDATED) */}
              <span
                className="input-group-text bg-white border-left-0 text-secondary"
                style={{ cursor: "pointer" }}
                // Attach the toggle function to the click event
                onClick={togglePasswordVisibility} 
              >
                {/* 4. Dynamic icon: fa-eye if hidden, fa-eye-slash if visible */}
                <i className={showPassword ? "far fa-eye-slash" : "far fa-eye"}></i> 
              </span>
            </div>
          </div>

          {/* Sign Up Button (no change) */}
          <button
            type="submit"
            className="btn w-100 text-white"
            style={{ backgroundColor: purpleColor, borderColor: purpleColor }}
          >
            Sign up
          </button>
        </form>

        <p className="text-center mt-3 text-secondary small">
          Already have an account?{" "}
          <Link
            to="/signin"
            style={{ color: purpleColor, textDecoration: "none" }}
          >
            {t("signIn")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
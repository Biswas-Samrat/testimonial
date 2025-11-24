import React, { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn() {
  const { t } = useTranslation();
  const purpleColor = "#7357FE";

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white">
      <div className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-2">{t("Sign In For Free")} 😊</h2>

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
          <div className="mb-3">
            <label className="form-label small text-secondary">Email *</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="form-label small text-secondary">
              Password *
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
              />
              <span
                className="input-group-text bg-white border-left-0 text-secondary"
                style={{ cursor: "pointer" }}
                onClick={togglePasswordVisibility}
              >
                <i
                  className={showPassword ? "far fa-eye-slash" : "far fa-eye"}
                ></i>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-100 text-white"
            style={{ backgroundColor: purpleColor, borderColor: purpleColor }}
          >
            Sign up
          </button>
        </form>

        <p className="text-center mt-3 text-secondary small">
          Do not have an account?{" "}
          <Link
            to="/signup"
            style={{ color: purpleColor, textDecoration: "none" }}
          >
            {t("signUp")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;

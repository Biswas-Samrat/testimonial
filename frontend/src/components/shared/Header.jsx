import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../../hooks/useTranslation";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useEffect, useRef } from "react";

function Header() {
  const { t } = useTranslation();
  const purpleStyle = { backgroundColor: "#575CFE", borderColor: "#575CFE" }; // Custom color

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const nav = navbarRef.current;
      const isOpen = nav && nav.classList.contains("show");

      if (isOpen && !nav.contains(e.target)) {
        const collapse = document.getElementById("navbarNav");
        if (collapse) {
          const bsCollapse = new window.bootstrap.Collapse(collapse, {
            toggle: false,
          });
          bsCollapse.hide();
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3 shadow"
        style={{ borderBottom: "1px solid rgb(46,46,46)" }}
      >
        <div className="container-fluid container-xl">
          {/* Logo and Brand (left) */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <i
              className="fas fa-thumbs-up text-primary me-2 fs-4"
              aria-hidden="true"
            ></i>
            <h4 className="mb-0">Testimonial</h4>
          </Link>

          {/* Toggler button for mobile menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links and Right-Side Buttons */}
          <div
            ref={navbarRef}
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            {/* Main Links - centered */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item me-3">
                <Link className="nav-link" to="/customers">
                  {t("customers")}
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/features">
                  {t("features")}
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/integrations">
                  {t("integrations")}
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/pricing">
                  {t("pricing")}
                </Link>
              </li>

              {/* Additional links (Mobile only - as these are typically secondary) */}
              <li className="nav-item d-lg-none mt-2">
                <Link className="nav-link" to="/embed-widgets">
                  {t("embedWidgets")}
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link" to="/chrome-extension">
                  {t("chromeExtension")}
                </Link>
              </li>

              {/* Mobile-only Auth buttons */}
              <li className="nav-item d-lg-none mt-3">
                <Link className="btn btn-outline-light w-100 mb-2" to="/signin">
                  {t("signIn")}
                </Link>
                <Link
                  className="btn text-white w-100"
                  to="/signup"
                  style={purpleStyle}
                >
                  {t("signUp")}
                </Link>
              </li>
            </ul>

            {/* Right-Side Elements (Language Switcher, Auth) - Desktop only */}
            <div className="d-none d-lg-flex align-items-center">
              <LanguageSwitcher />

              <Link
                to="/signin"
                className="btn btn-link text-white text-decoration-none me-3"
              >
                {t("signIn")}
              </Link>

              <Link to="/signup" className="btn text-white" style={purpleStyle}>
                {t("signUp")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

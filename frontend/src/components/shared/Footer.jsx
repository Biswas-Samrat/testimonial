import React from "react";
import { Link } from "react-router-dom"; // Required for navigation links
import { useTranslation } from "../../hooks/useTranslation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Twitter, Linkedin, Envelope } from "react-bootstrap-icons";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Data for the new "PRODUCTS" column
  const productsColumn = {
    title: "PRODUCTS",
    links: [
      { name: "Our Wall of Love", to: "/wall-of-love" },
      { name: "Chrome extension", to: "/chrome-extension" },
      { name: "Embed widgets", to: "/embed-widgets" },
      { name: "Pricing", to: "/pricing" },
      { name: "Features", to: "/features" },
    ],
  };

  return (
    <footer
      className="bg-dark text-light"
      style={{ backgroundColor: "rgb(33, 37, 41)", padding: "0 0 40px 0" }}
    >
      {/* Horizontal Rule Separator */}
      <hr
        style={{ borderColor: "rgba(85, 85, 85, 1)", opacity: 0.5, margin: 0 }}
      />

      <div className="container-xl pt-5">
        <div className="row">
          {/* Column 1: Logo and Tagline (Wide column for branding) */}
          <div className="col-12 col-lg-3 mb-5 mb-lg-0 text-center text-lg-start">
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-3">
              {/* Logo/Icon - Assuming 'fa-thumbs-up' is correctly imported/loaded */}
              <i
                className="fas fa-thumbs-up text-primary me-2 fs-4"
                aria-hidden="true"
                style={{ color: "#575CFE" }} // Explicitly setting color to match the primary purple
              ></i>
              <h4 className="fw-bold mb-0">Testimonial</h4>
            </div>
            <p
              className="text-secondary"
              style={{
                maxWidth: "300px",
                margin: "0 auto",
                color: "rgb(150, 150, 150)",
              }}
            >
              The easiest solution to getting text and video testimonials from
              your customers
            </p>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4 mb-lg-0 text-start">
            <h6
              className="fw-bold text-uppercase mb-3"
              style={{ color: "rgb(150, 150, 150)" }}
            >
              {productsColumn.title}
            </h6>
            <ul className="list-unstyled">
              {productsColumn.links.map((link, index) => (
                <li key={index} className="mb-2 ">
                  <Link
                    to={link.to}
                    className="text-decoration-none small"
                    style={{ color: "rgb(200, 200, 200)" }} // Light grey link color
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* End of PRODUCTS Column */}

          {/* Add more columns here later (RESOURCES, CUSTOMERS, FREE TOOLS) */}
        </div>
      </div>

      {/* Copyright and Social Icons Section (Below the main columns) */}
      <div
        className="container-xl text-center mt-5 pt-3 border-top"
        style={{ borderColor: "rgb(50, 50, 50)" }}
      >
        <p className="mb-3 small text-secondary">
          &copy; {currentYear} Testimonial Project. All rights reserved.
        </p>
        <div
          className="d-flex justify-content-center gap-4"
          style={{ fontSize: "1.2rem" }}
        >
          {/* Social Icons (using react-bootstrap-icons) */}
          <a href="#" className="text-secondary" aria-label="Twitter">
            <Twitter />
          </a>
          <a href="#" className="text-secondary" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href="#" className="text-secondary" aria-label="Email">
            <Envelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

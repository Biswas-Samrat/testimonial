import React from "react";
import { useTranslation } from "../hooks/useTranslation";

function Pricing() {
  const { t } = useTranslation();
  const trialButtonStyle = {
    backgroundColor: "#fef3c7",
    color: "#343a40",
    fontWeight: "bold",
  };

  return (
    <div>
      <header className="bg-dark text-white text-center py-5">
        <div className="container py-5">
          <h1 className="display-3 fw-bolder mb-4">
            {t("The easiest way to drive more sales for your business")}
          </h1>

          <p className="lead text-secondary mb-5">
            {t(
              "Start with 10 text testimonials and 2 video testimonials on us, then upgrade to our paid plan only if you're happy."
            )}
          </p>

          <a
            href="/signup"
            className="btn btn-lg px-2 py-1 rounded-3 shadow-lg"
            style={trialButtonStyle}
          >
            {t("7 days free trial, cancel anytime!")}
          </a>
        </div>
      </header>

      <section className="container my-5 text-center">
        <h2 className="display-6 fw-bold mb-4">
          {t("Simple & Transparent Pricing")}
        </h2>
        <p className="text-muted mb-5">
          {t("No hidden fees. Choose the plan that fits your business needs.")}
        </p>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h3 className="card-title fw-bold">Basic</h3>
                <h4 className="display-4 fw-bold my-4">$0</h4>
                <p className="text-muted">For individuals getting started</p>
                <ul
                  className="list-unstyled text-start mx-auto"
                  style={{ maxWidth: "250px" }}
                >
                  <li>✅ {t("10 Text Testimonials")}</li>
                  <li>✅ {t("2 Video Testimonials")}</li>
                  <li>❌ {t("Custom Branding")}</li>
                </ul>
                <a
                  href="/signup"
                  className="btn btn-outline-primary mt-3 w-100"
                >
                  {t("Start for Free")}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow border-primary border-3">
              <div className="card-header bg-primary text-white fw-bold">
                {t("Most Popular")}
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold">Pro</h3>
                <h4 className="display-4 fw-bold my-4">
                  $29<span className="fs-6 fw-normal">/month</span>
                </h4>
                <p className="text-muted">
                  For growing agencies and businesses
                </p>
                <ul
                  className="list-unstyled text-start mx-auto"
                  style={{ maxWidth: "250px" }}
                >
                  <li>✅ {t("Unlimited Text Testimonials")}</li>
                  <li>✅ {t("Unlimited Video Testimonials")}</li>
                  <li>✅ {t("Custom Branding")}</li>
                </ul>
                <a href="/signup" className="btn btn-primary mt-3 w-100">
                  {t("Get Started")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;

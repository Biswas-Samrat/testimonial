import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import v1Image from "../assets/images/v1.png";

function Customers() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-dark text-white py-1">
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold">
                {t("Collect and embed video testimonials in minutes")}
              </h1>
              <p className="lead mt-4 mb-5 pe-lg-5">
                {t(
                  "Testimonial helps your agency boost conversions on your clients' websites with social proof. Collect and embed video testimonials in record time like this"
                )}{" "}
                <span role="img" aria-label="emoji">
                  👇
                </span>
              </p>

              <a
                href="/signup"
                className="btn btn-primary btn-lg px-5 py-3 fw-bold"
              >
                {t("TRY IT NOW")}
              </a>
            </div>

            <div className="col-lg-6 col-md-12">
              <span
                className="me-1 "
                style={{ fontSize: "50px", color: "#0d6efd" }}
              >
                ❝
              </span>
              <div
                className="p-3  text-dark rounded mb-3"
                style={{ backgroundColor: "#fef3c7" }}
              >
                <blockquote className="blockquote mb-0">
                  <p className="fs-5 fw-medium">
                    {t(
                      "Once we added Testimonial, it unlocked so much more conversion for us!"
                    )}
                  </p>
                </blockquote>
              </div>

              {/* The image is loaded using the imported path */}
              <div className="ratio ratio-16x9 border border-secondary rounded overflow-hidden shadow-lg">
                <img
                  src={v1Image}
                  alt={t("Video Testimonial from Levels.fyi")}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;

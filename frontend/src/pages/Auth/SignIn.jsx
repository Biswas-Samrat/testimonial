import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

function SignIn() {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className="container-sm my-5 p-5 border rounded shadow-sm"
        style={{ maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">{t("signIn")}</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="user@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ backgroundColor: "#575CFE", borderColor: "#575CFE" }}
          >
            {t("signIn")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

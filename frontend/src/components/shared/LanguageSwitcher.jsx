import React from "react";
import { useTranslation } from "../../hooks/useTranslation";

function LanguageSwitcher() {
  // FIX: Destructure languageMap from the hook
  const { language, changeLanguage, t, languageMap } = useTranslation(); // The toggleLanguage function is now redundant since the dropdown list handles switching // const toggleLanguage = () => { //     const newLang = language === 'en' ? 'es' : 'en'; //     changeLanguage(newLang); // }; // Mapping language code to a flag image (using a public CDN)

  const getFlag = (lang) => {
    switch (lang) {
      case "en":
        return "https://flagcdn.com/w20/us.png"; // US Flag for English
      case "es":
        return "https://flagcdn.com/w20/es.png"; // Spain Flag for Spanish
      default:
        return "https://placehold.co/20x15/575CFE/white?text=?";
    }
  };

  return (
    <div className="dropdown me-3">
                 {" "}
      <button
        className="btn btn-dark dropdown-toggle d-flex align-items-center"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
                       {" "}
        <img
          src={getFlag(language)}
          width="20"
          alt={`${language} flag`}
          className="me-2"
        />
                       {" "}
        <span className="text-white text-uppercase">{language}</span>           {" "}
      </button>
                 {" "}
      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="languageDropdown"
      >
                       {" "}
        {/* Iterate over available languages using the now-available languageMap */}
                       {" "}
        {Object.keys(languageMap).map((lang) => (
          <li key={lang}>
                                   {" "}
            <a
              className={`dropdown-item ${
                language === lang ? "active" : ""
              } d-flex align-items-center`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage(lang);
              }}
            >
                                         {" "}
              <img
                src={getFlag(lang)}
                width="20"
                alt={`${lang} flag`}
                className="me-2"
              />
                                          {lang.toUpperCase()}                 
                   {" "}
            </a>
                               {" "}
          </li>
        ))}
                   {" "}
      </ul>
             {" "}
    </div>
  );
}

export default LanguageSwitcher;

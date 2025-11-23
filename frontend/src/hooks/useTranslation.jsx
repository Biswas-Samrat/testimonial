import React, { createContext, useContext, useState, useMemo } from "react";
// FIX 1: Corrected import path to '../config' (resolved earlier)
import { languageMap, defaultLang } from "../config";

// 1. Create the Context
const TranslationContext = createContext();

// 2. Create the Provider Component
export const TranslationProvider = ({ children }) => {
  // State to hold the current language ('en' or 'es')
  const [language, setLanguage] = useState(defaultLang); // Function to set a new language

  const changeLanguage = (newLang) => {
    if (languageMap[newLang]) {
      setLanguage(newLang);
    }
  }; // The 't' (translate) function returns the translated string for a key

  const t = useMemo(
    () => (key) => {
      const translations = languageMap[language];
      const translation = translations ? translations[key] : key; // Handle function translations (like dynamic page titles)
      if (typeof translation === "function") {
        // This is a simple implementation, you might pass arguments here
        return translation(key);
      }

      return translation || key; // Return the key itself if no translation is found
    },
    [language]
  ); // Context value bundle - FIX 2: Added languageMap to the value object

  const value = { language, changeLanguage, t, languageMap };

  return (
    <TranslationContext.Provider value={value}>
                  {children}       {" "}
    </TranslationContext.Provider>
  );
};

// 3. Create the Custom Hook for consumption
export const useTranslation = () => {
  return useContext(TranslationContext);
};

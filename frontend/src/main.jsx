import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { TranslationProvider } from './hooks/useTranslation';

// Import Bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Needed for Navbar toggler and dropdowns
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* BrowserRouter enables routing */}
        <BrowserRouter>
            {/* TranslationProvider enables language switching via context */}
            <TranslationProvider>
                <App />
            </TranslationProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
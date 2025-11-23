import React from 'react';
import { Routes, Route } from 'react-router-dom';

// FIX: Added .jsx extension to all imports to resolve 'Could not resolve' errors.
import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';

import Home from './pages/Home.jsx';
import Customers from './pages/Customers.jsx';
import Features from './pages/Features.jsx';
import Integrations from './pages/Integrations.jsx';
import Pricing from './pages/Pricing.jsx';
import WallOfLove from './pages/WallOfLove.jsx';
import EmbedWidgets from './pages/EmbedWidgets.jsx';
import ChromeExtension from './pages/ChromeExtension.jsx';
import SignIn from './pages/Auth/SignIn.jsx';
import SignUp from './pages/Auth/SignUp.jsx';

/**
 * The main application component, setting up routing and global layout.
 * Header and Footer components are placed outside the <Routes> block 
 * to ensure they appear on every page/route.
 */
function App() {
    return (
        // The d-flex and flex-column classes (assumed from Bootstrap or similar) 
        // ensure the content takes up the full viewport height.
        <div className="d-flex flex-column min-vh-100">
            {/* Header is rendered globally */}
            <Header /> 
            
            {/* The main content area, flex-grow-1 ensures it pushes the footer down */}
            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/integrations" element={<Integrations />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/wall-of-love" element={<WallOfLove />} />
                    <Route path="/embed-widgets" element={<EmbedWidgets />} />
                    <Route path="/chrome-extension" element={<ChromeExtension />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </main>

            {/* Footer is rendered globally */}
            <Footer />
        </div>
    );
}

export default App;
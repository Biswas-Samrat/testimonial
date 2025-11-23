import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

// Page Imports
import Home from './pages/Home';
import Customers from './pages/Customers';
import Features from './pages/Features';
import Integrations from './pages/Integrations';
import Pricing from './pages/Pricing';
import WallOfLove from './pages/WallOfLove';
import EmbedWidgets from './pages/EmbedWidgets';
import ChromeExtension from './pages/ChromeExtension';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Header is static across all main routes */}
            <Header />

            {/* Main content area */}
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

            {/* Footer is static across all main routes */}
            <Footer />
        </div>
    );
}

export default App;
import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white-50 mt-5 p-4">
            <div className="container-xl text-center">
                <p className="mb-0">
                    &copy; {currentYear} Testimonial Project. All rights reserved.
                </p>
                <div className="d-flex justify-content-center mt-2">
                    <a href="#" className="text-white-50 mx-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-white-50 mx-2"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-white-50 mx-2"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
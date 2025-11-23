import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

function Features() {
    const { t } = useTranslation();
    return (
        <div className="container-xl my-5 p-5 bg-light rounded shadow-sm">
            <h2 className="text-dark">{t('pageTitle')(t('features'))}</h2>
            <p className="mt-4">Detailing all the key features of the testimonial platform.</p>
        </div>
    );
}

export default Features;
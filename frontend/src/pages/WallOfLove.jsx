import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

function WallOfLove() {
    const { t } = useTranslation();
    return (
        <div className="container-xl my-5 p-5 bg-light rounded shadow-sm">
            <h2 className="text-dark">{t('pageTitle')(t('wallOfLove'))}</h2>
            <p className="mt-4">A showcase of customer testimonials (the core product!).</p>
        </div>
    );
}

export default WallOfLove;
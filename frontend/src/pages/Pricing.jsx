import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

function Pricing() {
    const { t } = useTranslation();
    return (
        <div className="container-xl my-5 p-5 bg-light rounded shadow-sm">
            <h2 className="text-dark">{t('pageTitle')(t('pricing'))}</h2>
            <p className="mt-4">Displaying the pricing tiers and plans.</p>
        </div>
    );
}

export default Pricing;
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

function Customers() {
    const { t } = useTranslation();
    return (
        <div className="container-xl my-5 p-5 bg-light rounded shadow-sm">
            <h2 className="text-dark">{t('pageTitle')(t('customers'))}</h2>
            <p className="mt-4">This page would list case studies and success stories.</p>
        </div>
    );
}

export default Customers;
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

function EmbedWidgets() {
    const { t } = useTranslation();
    return (
        <div className="container-xl my-5 p-5 bg-light rounded shadow-sm">
            <h2 className="text-dark">{t('pageTitle')(t('embedWidgets'))}</h2>
            <p className="mt-4">Instructions and options for embedding widgets on external sites.</p>
        </div>
    );
}

export default EmbedWidgets;
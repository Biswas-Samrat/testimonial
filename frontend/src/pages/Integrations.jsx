import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

function Integrations() {
    const { t } = useTranslation();
    return (
        <div className="container-xl my-5 p-5 bg-light rounded shadow-sm">
            <h2 className="text-dark">{t('pageTitle')(t('integrations'))}</h2>
            <p className="mt-4">This is where users find out how to connect tools like Zapier, Slack, etc.</p>
        </div>
    );
}

export default Integrations;
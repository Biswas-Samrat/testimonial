import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

function ChromeExtension() {
    const { t } = useTranslation();
    return (
        <div className="container-xl my-5 p-5 bg-light rounded shadow-sm">
            <h2 className="text-dark">{t('pageTitle')(t('chromeExtension'))}</h2>
            <p className="mt-4">Landing page detailing the benefits of the Chrome extension.</p>
        </div>
    );
}

export default ChromeExtension;
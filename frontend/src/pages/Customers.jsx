import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

function Customers() {
    const { t } = useTranslation();
    return (
       <div>
        <h1>

          Customers
        </h1>
     </div>
    );
}

export default Customers;
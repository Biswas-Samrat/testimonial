import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';

function SignUp() {
    const { t } = useTranslation();
    return (
        <div className="container-sm my-5 p-5 border rounded shadow-sm" style={{ maxWidth: '400px' }}>
            <h3 className="text-center mb-4">{t('signUp')}</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="user@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="********" />
                </div>
                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#575CFE', borderColor: '#575CFE' }}>
                    {t('signUp')}
                </button>
            </form>
            <p className="text-center mt-3">
                Already have an account? <Link to="/signin" className="text-primary">{t('signIn')}</Link>
            </p>
        </div>
    );
}

export default SignUp;
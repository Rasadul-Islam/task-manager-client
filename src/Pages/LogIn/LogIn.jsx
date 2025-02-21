import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            LogIn

            <h1>You don't have an account. <Link to="/register" className='text-teal-500'>Register</Link> Now</h1>
        </div>
    );
};

export default LogIn;
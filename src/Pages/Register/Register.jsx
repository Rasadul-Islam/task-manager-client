import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            Register
            <h1>You have an account. <Link to="/logIn" className='text-teal-500'>Log In</Link> here</h1>
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-teal-500 mb-6">Welcome to TaskMate</h1>
            
            {user ? (
                <Link 
                    to="/dashboard" 
                    className="btn btn-outline btn-success text-lg px-6 py-2">
                    Go to Dashboard
                </Link>
            ) : (
                <Link to="/logIn" className="text-red-500 text-lg font-semibold">Please Log In First</Link>
            )}
        </div>
    );
};

export default Home;

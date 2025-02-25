import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Navigate("/");
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    };


    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (
        <div className="bg-gray-100">
            <div className='navbar container mx-auto'>
                <div className="flex-1">
                    <NavLink className="btn btn-ghost text-2xl text-teal-500">TaskMate</NavLink>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        {
                            user ?
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt={user.displayName}
                                                src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-teal-500">
                                        {links}
                                        <li>
                                            <button
                                                onClick={() => { handleLogout(); }}>
                                                Log Out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                :
                                <NavLink to="/logIn" className="btn btn-ghost text-xl text-teal-500">Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaTicketAlt } from 'react-icons/fa';




const Navbar = () => {

     const { user, logout } = useContext(AuthContext);
     const navigate = useNavigate();

     const handleLogout = () => {
        logout();
        navigate('/login');
     };

      
     const activeStyle = ({ isActive }) =>
        isActive
        ? "text-white font-bold border-b-2 border-white pb-1"
        : "text-gray-200 hover:text-white transition";


     return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
                    <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2">
                        <FaTicketAlt /> Eventora
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <NavLink to="/" className={activeStyle}> Home </NavLink>

                        <NavLink to="/about" className={activeStyle}> About </NavLink>

                        <NavLink to="/contact" className={activeStyle}>Contact</NavLink>


                        {user ? (
                            <>
                                <NavLink to={user.role === 'admin' ? '/admin' : '/dashboard'} className={activeStyle}>Dashboard</NavLink>
                                <button onClick={handleLogout} className="bg-gray-700 hover:bg-black text-white px-4 py-2 rounded-md transition">Logout</button>
                            </>
                        ) : (
                            <>

                                <NavLink to="/login" className={activeStyle}>Login
                                </NavLink>

                                <NavLink to="/register" className={({isActive}) =>
                                               isActive ? "bg-gray-200 text-gray-900 px-4 py-2 rounded-md font-semibold transition" : "bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md font-semibold transition"
                                            }> Sign Up
                               </NavLink>
                                {/* <Link to="/register" className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md font-semibold transition">Sign Up</Link> */}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );

}




export default Navbar;
// import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-teal-800 text-white flex justify-between items-center p-4">
            {/* Copyright Section */}
            <p className="text-sm m-0">© 2024 CozyCare. All Rights Reserved</p>

            {/* Quick Links */}
            <ul className="flex list-none m-0 p-0">
                <li className="ml-8">
                    <Link to="/terms-of-use" className="text-white no-underline transition-colors duration-300 hover:text-yellow-400">Terms of Use</Link>
                </li>
                <li className="ml-8">
                    <Link to="/privacy-policy" className="text-white no-underline transition-colors duration-300 hover:text-yellow-400">Privacy and Cookie Policy</Link>
                </li>
                <li className="ml-8">
                    <Link to="/" className="text-white no-underline transition-colors duration-300 hover:text-yellow-400">Sitemap</Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;

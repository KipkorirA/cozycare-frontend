// import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaShieldAlt, FaSitemap } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#085846] text-white flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
            {/* Copyright Section */}
            <p className="text-sm m-0 text-center md:text-left mb-4 md:mb-0">© 2024 CozyCare</p>

            {/* Quick Links */}
            <ul className="flex flex-col md:flex-row list-none m-0 p-0 items-center gap-4">
                <li>
                    <Link to="/terms-of-use" className="text-white no-underline transition-colors duration-300 hover:text-yellow-400 flex items-center" title="Terms of Use">
                        <FaFileAlt />
                        <span className="inline ml-2">Terms of Use</span>
                    </Link>
                </li>
                <li>
                    <Link to="/privacy-policy" className="text-white no-underline transition-colors duration-300 hover:text-yellow-400 flex items-center" title="Privacy and Cookie Policy">
                        <FaShieldAlt />
                        <span className="inline ml-2">Privacy and Cookie Policy</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white no-underline transition-colors duration-300 hover:text-yellow-400 flex items-center" title="Sitemap">
                        <FaSitemap />
                        <span className="inline ml-2">Sitemap</span>
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
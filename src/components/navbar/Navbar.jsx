import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import throttle from 'lodash.throttle';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); 

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }, 200);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const getNavbarClass = () => {
        let navbarClass = 'fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out';
        return navbarClass;
    };

    return (
        <nav className={`${getNavbarClass()} ${showNavbar ? 'translate-x-0' : '-translate-x-full lg:translate-y-0'} flex items-center justify-between shadow-2xl backdrop-blur-md relative border-b border-[rgba(255,255,255,0.1)]`}>
            <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-[rgba(8,88,70,0.98)] to-[rgba(8,88,70,0.92)] backdrop-filter backdrop-blur-lg" />
            <div className="absolute inset-0 w-full h-full z-[-1] opacity-70 bg-[url('/images/Navbar-background.png')] bg-cover bg-center bg-no-repeat mix-blend-overlay" />

            <div className="flex-1 z-20 px-6"> 
                <Link to="/" className="block hover:opacity-80 transition-all duration-300 transform hover:scale-105 lg:-mb-20 lg:-mt-20">
                    <img src="/images/logo.png" alt="CozyCare Logo" className="w-[350px] h-auto lg:w-[450px] drop-shadow-lg" />
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center z-20">
                <button 
                    className="lg:hidden z-20 px-6 text-white text-3xl transition-transform duration-300 hover:scale-110"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Navigation links */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-row absolute lg:relative top-full lg:top-auto left-0 w-full lg:w-auto bg-gradient-to-b from-[rgba(8,88,70,0.98)] to-[rgba(8,88,70,0.95)] lg:bg-transparent flex-1 items-center justify-center z-20 backdrop-blur-md shadow-lg lg:shadow-none`}> 
                <ul className="flex flex-row gap-4 lg:gap-12 items-center w-full lg:w-auto py-4 lg:py-0 px-4 justify-between">
                    <li>
                        <Link to="/about" className="group flex items-center text-white text-[1.1rem] lg:text-[1.6rem] transition-all duration-300 hover:text-[#f0a500] px-3 lg:px-0">
                            <i className="fas fa-home lg:hidden text-2xl transform group-hover:scale-110 transition-transform"></i>
                            <span className="hidden lg:inline lg:ml-2 text-xl lg:text-2xl font-bold tracking-wider hover:tracking-widest drop-shadow-md">COZYCARE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pricing" className="group flex items-center text-white text-[1.1rem] lg:text-[1.6rem] transition-all duration-300 hover:text-[#f0a500] px-3 lg:px-0">
                            <i className="fas fa-dollar-sign lg:hidden text-2xl transform group-hover:scale-110 transition-transform"></i>
                            <span className="hidden lg:inline lg:ml-2 text-xl lg:text-2xl font-bold tracking-wider hover:tracking-widest drop-shadow-md">PRICING</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers" className="group flex items-center text-white text-[1.1rem] lg:text-[1.6rem] transition-all duration-300 hover:text-[#f0a500] px-3 lg:px-0">
                            <i className="fas fa-briefcase lg:hidden text-2xl transform group-hover:scale-110 transition-transform"></i>
                            <span className="hidden lg:inline lg:ml-2 text-xl lg:text-2xl font-bold tracking-wider hover:tracking-widest drop-shadow-md">CAREERS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="group flex items-center text-white text-[1.1rem] lg:text-[1.6rem] transition-all duration-300 hover:text-[#f0a500] px-3 lg:px-0">
                            <i className="fas fa-phone lg:hidden text-2xl transform group-hover:scale-110 transition-transform"></i>
                            <span className="hidden lg:inline lg:ml-2 text-xl lg:text-2xl font-bold tracking-wider hover:tracking-widest drop-shadow-md">CONTACT</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/subscribe" className="text-white text-[2.2rem] transition-all duration-300 hover:text-[#f0a500] hover:scale-110 px-4">
                            <i className="fas fa-user-circle drop-shadow-lg"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
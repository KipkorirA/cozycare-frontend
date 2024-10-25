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

    const getNavbarClass = () => {
        let navbarClass = 'fixed top-0 left-0 w-full z-50 transition-transform duration-300';
        return navbarClass;
    };

    return (
        <nav className={`${getNavbarClass()} ${showNavbar ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-between shadow-lg backdrop-blur-sm relative`}>
            <div className="absolute inset-0 w-full h-full z-10 bg-[rgba(8,88,70,0.89)]" />
            <div className="absolute inset-0 w-full h-full z-[-1] opacity-50 bg-[url('/images/Navbar-background.png')] bg-cover bg-center bg-no-repeat" />

            <div className="flex-1 z-20 px-4"> 
                <Link to="/" className="block hover:opacity-90 transition-opacity duration-200">
                    <img src="/images/logo.png" alt="CozyCare Logo" className="w-[120px] h-auto" />
                </Link>
            </div>

            {/* Mobile menu button */}
            <button 
                className="lg:hidden z-20 px-4 text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/* Navigation links */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-full lg:top-auto left-0 w-full lg:w-auto bg-[rgba(8,88,70,0.95)] lg:bg-transparent flex-1 items-center justify-center z-20`}> 
                <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center w-full lg:w-auto py-4 lg:py-0">
                    <li>
                        <Link to="/about" className="group flex items-center text-white text-[1.2rem] lg:text-[1.5rem] transition-all duration-300 hover:text-[#f0a500] px-4 lg:px-0">
                            <i className="fas fa-home mr-2 lg:hidden transform group-hover:scale-110 transition-transform"></i>
                            <span className="lg:ml-2 text-xl lg:text-2xl font-bold tracking-wide">COZYCARE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pricing" className="group flex items-center text-white text-[1.2rem] lg:text-[1.5rem] transition-all duration-300 hover:text-[#f0a500] px-4 lg:px-0">
                            <i className="fas fa-dollar-sign mr-2 lg:hidden transform group-hover:scale-110 transition-transform"></i>
                            <span className="lg:ml-2 text-xl lg:text-2xl font-bold tracking-wide">PRICING</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers" className="group flex items-center text-white text-[1.2rem] lg:text-[1.5rem] transition-all duration-300 hover:text-[#f0a500] px-4 lg:px-0">
                            <i className="fas fa-briefcase mr-2 lg:hidden transform group-hover:scale-110 transition-transform"></i>
                            <span className="lg:ml-2 text-xl lg:text-2xl font-bold tracking-wide">CAREERS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="group flex items-center text-white text-[1.2rem] lg:text-[1.5rem] transition-all duration-300 hover:text-[#f0a500] px-4 lg:px-0">
                            <i className="fas fa-phone mr-2 lg:hidden transform group-hover:scale-110 transition-transform"></i>
                            <span className="lg:ml-2 text-xl lg:text-2xl font-bold tracking-wide">CONTACT US</span>
                        </Link>
                    </li>
                </ul>

                <div className="p-4 lg:p-6 mx-4 z-20"> 
                    <Link to="/subscribe" className="text-white text-[1.8rem] lg:text-[2rem] transition-all duration-300 hover:text-[#f0a500] hover:scale-110 inline-block">
                        <i className="fas fa-user-circle"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
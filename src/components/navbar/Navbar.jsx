import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import throttle from 'lodash.throttle';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // eslint-disable-next-line no-unused-vars
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
        <nav className={`${getNavbarClass()} ${showNavbar ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-between shadow relative`}>
            {/* Green Background Layer */}
            <div 
                className="absolute top-0 left-0 w-full h-full z-10" 
                style={{
                    backgroundColor: 'rgba(8, 88, 70, 0.89)', // Adjust opacity for the green background
                }} 
            />
            {/* Background Image Layer */}
            <div 
                className="absolute top-0 left-0 w-full h-full z-[-1]" 
                style={{
                    backgroundImage: 'url("/images/Navbar-background.png")', // Correct image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.5, 
                }} 
            />
            {/* Logo */}
            <div className="flex-1 z-20 "> {/* Added z-20 here to bring logo above layers */}
                <Link to="/">
                    <img src="/images/logo.png" alt="CozyCare Logo" className="w-[120px] h-100% " />
                </Link>
            </div>

            {/* Navigation links */}
            <div className="flex flex-1 items-center justify-center z-20"> {/* Added z-20 here */}
                <ul className="flex gap-5 list-none m-0 p-0">
                    <li>
                        <Link to="/about" className="flex items-center text-white text-[1.5rem] transition-colors duration-300 hover:text-[#f0a500]">
                            <i className="fas fa-home block lg:hidden "></i>
                            <span className="ml-2 hidden lg:block  text-2xl font-bold">COZYCARE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pricing" className="flex items-center text-white text-[1.5rem] transition-colors duration-300 hover:text-[#f0a500]">
                            <i className="fas fa-dollar-sign block lg:hidden"></i>
                            <span className="ml-2 hidden lg:block text-2xl font-bold">PRICING</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers" className="flex items-center text-white text-[1.5rem] transition-colors duration-300 hover:text-[#f0a500]">
                            <i className="fas fa-briefcase block lg:hidden"></i>
                            <span className="ml-2 hidden lg:block text-2xl font-bold">CAREERS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="flex items-center text-white text-[1.5rem] transition-colors duration-300 hover:text-[#f0a500]">
                            <i className="fas fa-phone block lg:hidden"></i>
                            <span className="ml-2 hidden lg:block text-2xl font-bold">CONTACT US</span>
                        </Link>
                    </li>
                </ul>
                {/* Subscribe link */}
                <div className="p-6 m-1 ml-auto z-20"> {/* Added z-20 here */}
                    <Link to="/subscribe" className="text-white text-[2rem] transition-colors duration-300 hover:text-[#f0a500]">
                        <i className="fas fa-user-circle"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

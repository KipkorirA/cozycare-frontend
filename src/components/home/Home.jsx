import { Link } from 'react-router-dom';
import './Home.css';  // Import the external CSS file for animations

const Home = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center h-[90vh] bg-cover bg-center text-white" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwbnVyc2VzfGVufDB8fDB8fHww')` }}>
            <div className="absolute inset-0 bg-[#08584765] z-10" />
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] p-8 z-20 gap-8">
                {/* Left side: Text content */}
                <div className="max-w-[600px] flex flex-col items-center md:items-center text-center content-center">
                    <h1 className="text-4xl font-bold text-white mb-4 pop-up-text">Making health accessible
                    and affordable</h1>
                    <h2 className="text-lg mb-6 pop-up-text">Your Home, Your Comfort, Our Care</h2>
                    <Link to="/services" className="inline-block bg-[#fcfaf8] text-[#130101] py-3 px-6 rounded-md text-xl font-medium mb-6 hover:bg-[#e69500]">
                        List of Services
                    </Link>
                    <div className="flex justify-center md:justify-center gap-4">
                        {/* Social Media Icons */}
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#f0a500]">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#f0a500]">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#f0a500]">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
                {/* Right side: Image */}
                <div className="flex-shrink-0 p-4 max-w-[500px]">
                    <img src="public/images/width_800.jpeg" alt="Healthcare" className="max-w-full h-auto shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Home;

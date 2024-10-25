import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwbnVyc2VzfGVufDB8fDB8fHww')` }}>
            <div className="absolute inset-0 bg-[#08584765] backdrop-blur-[2px] z-10" />
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1500px] px-4 md:px-6 lg:px-8 py-4 md:py-8 z-20 gap-4 md:gap-8 lg:gap-12">
                <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4 md:space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white pop-up-text leading-tight" style={{ fontFamily: 'TT Hoves Pro', fontWeight: '500' }}>
                        Making health accessible and affordable
                    </h1>

                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl pop-up-text text-gray-100">Your Home, Your Comfort, Our Care</h2>
                    <Link to="/services" className="inline-block bg-[#fcfaf8] text-[#130101] py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-lg sm:text-xl font-medium transition-all duration-300 ease-in-out hover:bg-[#e69500] hover:shadow-lg transform hover:-translate-y-1">
                        List of Services
                    </Link>

                    <div className="flex justify-center gap-4 sm:gap-6">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-[#f0a500] transition-colors duration-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-[#f0a500] transition-colors duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-[#f0a500] transition-colors duration-300">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex-shrink-0 p-2 sm:p-4 max-w-[500px]">
                    <img src="/images/width_800.jpeg" alt="Healthcare" className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
        </section>
    );
};

export default Home;
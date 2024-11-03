import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[92vh] bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwbnVyc2VzfGVufDB8fDB8fHww')` }}>
            <div className="absolute inset-0 bg-[#08584765] backdrop-blur-[3px] z-10" />
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1600px] px-5 md:px-8 lg:px-10 py-6 md:py-10 z-20 gap-6 md:gap-10 lg:gap-16">
                <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6 md:space-y-8">
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white pop-up-text leading-tight tracking-tight" style={{ fontFamily: 'TT Hoves Pro', fontWeight: '600' }}>
                        Making health accessible and affordable
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pop-up-text text-gray-100 font-medium">Your Home, Your Comfort, Our Care</h2>
                    <Link to="/services" className="inline-block bg-[#fcfaf8] text-[#130101] py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-[#e69500] hover:shadow-xl transform hover:-translate-y-1.5 active:transform active:translate-y-0">
                        List of Services
                    </Link>

                    <div className="flex justify-center gap-6 sm:gap-8 mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-3xl hover:text-[#f0a500] transition-all duration-300 hover:transform hover:scale-110">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-3xl hover:text-[#f0a500] transition-all duration-300 hover:transform hover:scale-110">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-3xl hover:text-[#f0a500] transition-all duration-300 hover:transform hover:scale-110">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-2/3 lg:w-3/4 flex-shrink-0 p-4 sm:p-6 max-w-[800px]">
                    <img src="/images/width_800.jpeg" alt="Healthcare" className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:shadow-3xl" />
                </div>
            </div>
        </section>
    );
};

export default Home;
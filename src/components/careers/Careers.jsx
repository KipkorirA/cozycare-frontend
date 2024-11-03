import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start bg-gradient-to-br from-[#a8c2b2] via-[#85a791] to-[#567d63] min-h-screen p-4 md:p-8 overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-64 h-64 rounded-full bg-white blur-3xl animate-pulse top-1/4 left-1/4"></div>
                <div className="absolute w-96 h-96 rounded-full bg-[#f0a500] blur-3xl animate-pulse delay-1000 bottom-1/4 right-1/4"></div>
            </div>

            {/* Left Division: Title and Earth Image */}
            <div className="w-full md:w-2/5 lg:w-1/3 xl:w-1/3 2xl:w-1/3 text-left md:sticky top-0 z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold text-[#333] mb-4 md:mb-6 pl-2 md:pl-4 mt-4 md:mt-6 tracking-tight animate-fade-in md:[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">CAREERS</h1>
                <hr className="w-24 md:w-32 border-3 border-[#f0a500] mb-6 md:mb-8 transition-all duration-500 ease-in-out hover:w-56 animate-pulse" />
                <img
                    src="/images/Pirateship.webp"
                    alt="A pirate ship representing adventure and teamwork"
                    className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] h-auto object-contain mt-4 md:mt-6 mb-4 ml-0 md:ml-4 hover:scale-110 transition-transform duration-500 shadow-2xl rounded-lg filter hover:brightness-110 animate-float"
                />
            </div>

            {/* Right Division: Information and Links */}
            <div className="w-full mt-8 sm:mt-16 md:mt-32 mx-2 sm:mx-4 md:mx-8 md:w-3/5 lg:w-2/3 xl:w-2/3 2xl:w-2/3 pl-0 md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-24 rounded-2xl p-4 sm:p-6 md:p-8 md:backdrop-blur-sm md:bg-white/10 z-10">
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-[#333] mb-4 sm:mb-6 md:mb-8 transition-all duration-300 hover:text-[#085846] hover:translate-x-2 md:[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">Join Our Team</h2>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#333] leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light hover:text-[#085846] transition-colors duration-300 transform hover:scale-[1.01]">
                    At CozyCare, we are committed to providing top-notch care and support. We are always looking for passionate professionals to join our growing team.
                </p>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#333] leading-relaxed mb-6 sm:mb-8 md:mb-10 font-light hover:text-[#085846] transition-colors duration-300 transform hover:scale-[1.01]">
                    If you are driven, compassionate, and want to make a difference, we would love to hear from you.
                </p>

                {/* Link to Careers Page */}
                <Link
                    to="/careers"
                    className="inline-block py-3 px-8 sm:py-4 sm:px-10 md:py-4 md:px-10 lg:py-5 lg:px-12 xl:py-6 xl:px-14 2xl:py-7 2xl:px-16 mt-4 md:mt-6 bg-[#085846] text-white rounded-full text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl transition-all duration-500 ease-in-out transform hover:bg-[#021f18] hover:translate-y-[-5px] hover:scale-105 active:translate-y-[2px] mb-6 sm:mb-8 md:mb-10 border-2 border-transparent hover:border-[#f0a500] hover:shadow-[0_0_15px_rgba(240,165,0,0.5)] relative overflow-hidden group"
                >
                    <span className="relative z-10">Explore Careers...</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>

                {/* Small Paragraph Link */}
                <Link
                    to="/careers"
                    className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#085846] hover:underline hover:text-[#021f18] mb-4 sm:mb-6 block transition-all duration-300 font-medium hover:translate-x-2 relative group"
                >
                    Learn more about our career opportunities and how you can contribute to CozyCare.
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0a500] group-hover:w-full transition-all duration-300"></span>
                </Link>
            </div>
        </section>
    );
};

export default Careers;
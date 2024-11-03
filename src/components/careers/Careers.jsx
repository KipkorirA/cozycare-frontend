import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start bg-gradient-to-br from-[#a8c2b2] to-[#85a791] min-h-screen p-8 overflow-hidden">
            {/* Left Division: Title and Earth Image */}
            <div className="w-full md:w-2/5 lg:w-1/3 xl:w-1/3 2xl:w-1/3 text-left sticky top-0">
                <h1 className="text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold text-[#333] mb-6 pl-4 mt-6 tracking-tight animate-fade-in">CAREERS</h1>
                <hr className="w-32 border-3 border-[#f0a500] mb-8 transition-all duration-500 ease-in-out hover:w-56" />
                <img
                    src="/images/Pirateship.webp"
                    alt="A pirate ship representing adventure and teamwork"
                    className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] h-auto object-contain mt-6 mb-4 ml-4 hover:scale-110 transition-transform duration-500 shadow-2xl rounded-lg filter hover:brightness-110"
                />
            </div>

            {/* Right Division: Information and Links */}
            <div className="w-full mt-24 md:mt-32 mx-8 md:mx-8 md:w-3/5 lg:w-2/3 xl:w-2/3 2xl:w-2/3 pl-0 md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-24 backdrop-blur-sm bg-white/10 rounded-2xl p-8">
                <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-[#333] mb-8 transition-all duration-300 hover:text-[#085846] hover:translate-x-2">Join Our Team</h2>
                <p className="text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#333] leading-relaxed mb-8 font-light hover:text-[#085846] transition-colors duration-300">
                    At CozyCare, we are committed to providing top-notch care and support. We are always looking for passionate professionals to join our growing team.
                </p>
                <p className="text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#333] leading-relaxed mb-10 font-light hover:text-[#085846] transition-colors duration-300">
                    If you are driven, compassionate, and want to make a difference, we would love to hear from you.
                </p>

                {/* Link to Careers Page */}
                <Link
                    to="/careers"
                    className="inline-block py-4 px-10 md:py-4 md:px-10 lg:py-5 lg:px-12 xl:py-6 xl:px-14 2xl:py-7 2xl:px-16 mt-6 bg-[#085846] text-white rounded-full text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl shadow-xl transition-all duration-500 ease-in-out transform hover:bg-[#021f18] hover:translate-y-[-5px] hover:shadow-2xl active:translate-y-[2px] mb-10 border-2 border-transparent hover:border-[#f0a500]"
                >
                    Explore Careers...
                </Link>

                {/* Small Paragraph Link */}
                <Link
                    to="/careers"
                    className="text-[#085846] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:underline hover:text-[#021f18] mb-6 block transition-all duration-300 font-medium hover:translate-x-2"
                >
                    Learn more about our career opportunities and how you can contribute to CozyCare.
                </Link>
            </div>
        </section>
    );
};

export default Careers;
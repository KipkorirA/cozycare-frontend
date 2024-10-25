import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <section className="flex flex-col md:flex-row items-start p-16 bg-[#a8c2b2]">
            {/* Left Division: Title and Earth Image */}
            <div className="w-full md:w-1/3 -mt-3  text-left">
                <h1 className="text-6xl text-[#333] mb-4 -ml-16">CAREERS</h1>
                <hr className="w-20 border-2 border-[#f0a500] mb-6" />
                <img
                    src="/images/Pirateship.webp"
                    alt="A pirate ship representing adventure and teamwork"
                    className="w-full max-w-[200px] h-auto object-contain mt-4"
                />
            </div>

            {/* Right Division: Information and Links */}
            <div className="w-full md:w-2/3 pl-0 md:pl-8">
                <h2 className="text-4xl text-[#333] mb-4">Join Our Team</h2>
                <p className="text-2xl text-[#555] leading-6 mb-4">
                    At CozyCare, we are committed to providing top-notch care and support. We are always looking for passionate professionals to join our growing team.
                </p>
                <p className="text-2xl text-[#555] leading-6 mb-4">
                    If you are driven, compassionate, and want to make a difference, we would love to hear from you.
                </p>

                {/* Link to Careers Page */}
                <Link
                    to="/careers"
                    className="inline-block py-3 px-8 mt-5 bg-[#085846] text-white rounded-full text-lg shadow-md transition-all duration-300 ease transform hover:bg-[#021f18] hover:translate-y-[-3px] mb-8"
                >
                    Explore Careers...
                </Link>

                {/* Small Paragraph Link */}
                <Link
                    to="/careers"
                    className="text-sm text-[#000408] underline hover:text-[#0056b3] mb-4 block"
                >
                    Learn more about our career opportunities and how you can contribute to CozyCare.
                </Link>
            </div>
        </section>
    );
};

export default Careers;
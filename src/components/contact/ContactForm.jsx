import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (e) => {
        setIsCaptchaValid(e.target.checked); // When checkbox is checked, the value will be true
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isCaptchaValid) {
            setIsLoading(true);
            try {
                const response = await fetch('https://cozycare-backend-g56w.onrender.com/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                alert("Your message has been sent successfully!");
                setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
                setIsCaptchaValid(false);
            } catch (error) {
                setErrorMessage("There was a problem sending your message: " + error.message);
            } finally {
                setIsLoading(false);
            }
        } else {
            setErrorMessage("Please complete the captcha.");
        }
    };

    return (
        <section className="flex justify-center items-center min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-[#085846]">
            <form className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl bg-[#085846] p-8 lg:p-12 rounded-xl shadow-2xl space-y-8" onSubmit={handleSubmit}>
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        className="w-full p-3 border-2 border-[#00a879] bg-[#00a879] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-[#004d45] placeholder:text-white/70 transition-all duration-300 ease-in-out" 
                        required 
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        className="w-full p-3 border-2 border-[#00a879] bg-[#00a879] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-[#004d45] placeholder:text-white/70 transition-all duration-300 ease-in-out" 
                        required 
                    />
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full p-3 border-2 border-[#00a879] bg-[#00a879] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-[#004d45] placeholder:text-white/70 transition-all duration-300 ease-in-out" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full p-3 border-2 border-[#00a879] bg-[#00a879] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-[#004d45] placeholder:text-white/70 transition-all duration-300 ease-in-out" 
                        required 
                    />
                </div>

                {/* Message */}
                <div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 border-2 border-[#00a879] bg-[#00a879] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-[#004d45] placeholder:text-white/70 transition-all duration-300 ease-in-out resize-none h-60" 
                        required
                    ></textarea>
                </div>

                {/* Simple Checkbox (acting as CAPTCHA) with Logo */}
                <div className="flex items-center justify-center mt-4">
                    <div className="border-2 border-[#00a879] p-4 rounded-lg flex items-center space-x-4">
                        <input 
                            type="checkbox" 
                            id="captcha" 
                            checked={isCaptchaValid} 
                            onChange={handleCaptchaChange}
                            className="mr-2"
                        />
                        <label htmlFor="captcha" className="text-white">I am not a robot</label>
                        {/* reCAPTCHA Logo */}
                        <img 
                            src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                            alt="reCAPTCHA Logo" 
                            className="w-6 h-6"
                        />
                    </div>
                </div>

                {/* Error Message */}
                {errorMessage && <p className="text-red-400 text-center font-medium animate-pulse">{errorMessage}</p>}

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className={`w-full py-4 text-lg font-semibold text-white bg-[#00a879] rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e69500] hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl'}`} 
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;

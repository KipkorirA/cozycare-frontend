import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const [captchaValue, setCaptchaValue] = useState(null);
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptcha = (value) => {
        setCaptchaValue(value);
        setIsCaptchaValid(true);
        console.log("Captcha value:", value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isCaptchaValid) {
            setIsLoading(true);
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...formData, captchaValue }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                alert("Your message has been sent successfully!");
                setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
                setIsCaptchaValid(false);
                setCaptchaValue(null);
            } catch (error) {
                setErrorMessage("There was a problem sending your message: " + error.message);
            } finally {
                setIsLoading(false);
            }
        } else {
            alert("Please complete the reCAPTCHA.");
        }
    };

    return (
        <section className="flex justify-center items-center p-16 bg-[#085846]">
            <form className="w-full max-w-lg bg-[#085846] p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                {/* First Name and Last Name */}
                <div className="flex justify-between mb-6">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        className="w-1/2 p-3 border border-[#00a879] bg-[#00a879] text-white rounded focus:outline-none focus:border-white focus:bg-[#004d45] placeholder:text-white placeholder:opacity-50" 
                        required 
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        className="w-1/2 p-3 border border-[#00a879] bg-[#00a879] text-white rounded focus:outline-none focus:border-white focus:bg-[#004d45] placeholder:text-white placeholder:opacity-50" 
                        required 
                    />
                </div>

                {/* Phone and Email */}
                <div className="flex justify-between mb-6">
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-1/2 p-3 border border-[#00a879] bg-[#00a879] text-white rounded focus:outline-none focus:border-white focus:bg-[#004d45] placeholder:text-white placeholder:opacity-50" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-1/2 p-3 border border-[#00a879] bg-[#00a879] text-white rounded focus:outline-none focus:border-white focus:bg-[#004d45] placeholder:text-white placeholder:opacity-50" 
                        required 
                    />
                </div>

                {/* Message */}
                <div className="mb-6">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-[#00a879] bg-[#00a879] text-white rounded focus:outline-none focus:border-white focus:bg-[#004d45] placeholder:text-white placeholder:opacity-50 h-32" 
                        required
                    ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center items-center mb-6">
                    <ReCAPTCHA
                        sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
                        onChange={handleCaptcha}
                    />
                </div>

                {/* Error Message */}
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className={`w-full py-3 text-lg text-white bg-[#00a879] rounded transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e69500]'}`} 
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;

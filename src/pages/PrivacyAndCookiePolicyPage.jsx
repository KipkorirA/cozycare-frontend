// Importing React
// import React from 'react';

const PrivacyAndCookiePolicyPage = () => {
    return (
        <div className="p-5 mx-auto bg-green-200 text-gray-800 font-sans leading-6 rounded-lg shadow-md">
            <h1 className="pt-32 text-2xl mb-5 font-serif">Privacy and Cookie Policy</h1>
            <p>
                CozyCare is committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy and Cookie Policy outlines how we collect, use, and protect your
                data when you interact with our website or utilize our services.
            </p>

            <h2 className="text-xl mt-8 mb-4 font-serif">Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="pl-5 list-disc">
                <li>Contact information: Name, address, phone number, email address</li>
                <li>Demographic information: Age, gender, occupation</li>
                <li>Health information: Medical history, symptoms, treatment preferences</li>
                <li>Payment information: Credit card details</li>
                <li>Usage data: Information about your interactions with our website or services</li>
            </ul>

            <h2 className="text-xl mt-8 mb-4 font-serif">How We Collect Information</h2>
            <p>We collect information through various methods, including:</p>
            <ul className="pl-5 list-disc">
                <li>Website forms: When you fill out forms on our website, such as contact forms or appointment requests.</li>
                <li>Cookies and tracking technologies: We use cookies and other tracking technologies to collect information about your browsing habits and preferences.</li>
                <li>Direct interactions: When you contact us directly, such as by phone or email.</li>
            </ul>

            <h2 className="text-xl mt-8 mb-4 font-serif">How We Use Your Information</h2>
            <p>We may use your information for the following purposes:</p>
            <ul className="pl-5 list-disc">
                <li>Providing our services: To deliver the care and services you have requested.</li>
                <li>Communicating with you: To respond to your inquiries, provide updates, and send important notifications.</li>
                <li>Improving our services: To analyze your usage data and make improvements to our website and services.</li>
                <li>Complying with legal requirements: To comply with applicable laws and regulations.</li>
            </ul>

            <h2 className="text-xl mt-8 mb-4 font-serif">Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="pl-5 list-disc">
                <li>Our employees and contractors: To provide our services and support.</li>
                <li>Healthcare providers: To coordinate your care and ensure continuity of treatment.</li>
                <li>Third-party service providers: To assist us with various tasks, such as payment processing, data analysis, and marketing.</li>
            </ul>

            <h2 className="text-xl mt-8 mb-4 font-serif">Health Data and Guidelines</h2>
            <p>
                We handle your health information with the utmost care and in compliance with applicable data protection and healthcare
                laws in Kenya. We implement appropriate security measures to protect your health data from unauthorized access,
                disclosure, alteration, or destruction.
            </p>

            <h2 className="text-xl mt-8 mb-4 font-serif">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="pl-5 list-disc">
                <li>Access your personal information: Request a copy of the personal information we hold about you.</li>
                <li>Correct your personal information: If you believe your information is inaccurate or incomplete, you can request corrections.</li>
                <li>Object to processing: You may object to certain types of processing, such as direct marketing.</li>
                <li>Request erasure: You may request the deletion of your personal information under certain circumstances.</li>
            </ul>

            <h2 className="text-xl mt-8 mb-4 font-serif">Cookies</h2>
            <p>
                We use cookies and similar technologies to enhance your browsing experience, to provide you with relevant content and
                advertisements, to measure the effectiveness of and to analyse the traffic and performance of our website. Cookies are
                small files that are stored on your device when you visit a website. You can accept or reject cookies by adjusting your
                browser settings or by using the cookie consent tool on our website. You can also delete cookies from your device at any
                time. However, some cookies are essential for the functionality of our website and cannot be disabled. If you reject or
                delete cookies, some features of our website may not work properly or at all.
            </p>

            <h2 className="text-xl mt-8 mb-4 font-serif">Contact Us</h2>
            <p>
                If you have any questions or concerns about our Privacy and Cookie Policy, please contact us at
                <a href="mailto:support@cozycare.com" className="text-blue-600 hover:underline"> support@cozycare.com</a>
            </p>
        </div>
    );
};

export default PrivacyAndCookiePolicyPage;

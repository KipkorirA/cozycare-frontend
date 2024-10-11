/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Slide.css';

const Slide = ({ imageSrc, altText, linkText, linkTo, textPosition, additionalClasses, title, description }) => {
    return (
        <div className={`relative w-full h-auto md:h-[600px] ${additionalClasses}`}>
            <div className={`absolute ${textPosition} z-10 text-center text-white`}>
                <h2 className="text-2xl font-bold">{title}</h2> {/* Slide title */}
                <p className="description">{description}</p> {/* Slide description, margin-bottom adjusted */}
                <p className="link"> {/* Set a small margin-top for the link paragraph */}
                    <Link to={linkTo} className='text-yellow-400 underline' aria-label={`Learn more about ${linkText}`}>
                        {linkText}
                    </Link>
                </p>
            </div>
            <img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-contain" // Keep as object-contain
                loading="lazy" // Lazy loading image for performance
            />
        </div>
    );
};

export default Slide;

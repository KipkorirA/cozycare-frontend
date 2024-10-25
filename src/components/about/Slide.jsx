/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


const Slide = ({ imageSrc, altText, linkText, linkTo, textPosition, additionalClasses, title, description }) => {
    return (
        <div className={`relative w-full min-h-[300px] sm:min-h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px] ${additionalClasses}`}>

            <img
                src={imageSrc}
                alt={altText}
                className="absolute inset-0 w-full h-full object-contain object-center"
                loading="lazy"
            />
            <div className={`absolute ${textPosition} z-10 text-center text-white p-4 sm:p-6 md:p-8`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{title}</h2>
                <p className="description text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] mx-auto mb-3 sm:mb-4">{description}</p>
                <p className="link mt-2 sm:mt-3 md:mt-4">
                    <Link to={linkTo} className='text-yellow-400 underline text-sm sm:text-base md:text-lg hover:text-yellow-300 transition-colors' aria-label={`Learn more about ${linkText}`}>
                        {linkText}
                    </Link>
                </p>
            </div>






        </div>
    );
};


export default Slide;
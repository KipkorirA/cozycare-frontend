/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Slide = ({ imageSrc, altText, linkText, linkTo, textPosition, additionalClasses, title, description }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Add autoplay logic here
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`relative w-full min-h-[300px] sm:min-h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px] ${additionalClasses}`}>

            <img
                src={imageSrc}
                alt={altText}
                className="absolute inset-0 w-full h-full object-contain object-center"
                loading="lazy"
            />
            <div className={`absolute ${textPosition} z-10 text-center text-white p-5 sm:p-6 md:-mt-10`}>                
                <p className="description text-[8px] lg:text-[20px] sm:text-[14px] max-w-[90%] mx-auto  sm:mb-4">{description}</p>
                <p className="link -mt-2  md:-mt-5 ">
                    <Link to={linkTo} className='text-yellow-400 text-[8px] underline  sm:text-base md:text-[13px]  hover:text-yellow-300  transition-colors' aria-label={`Learn more about ${linkText}`}>
                        {linkText}
                    </Link>
                </p>
            </div>






        </div>
    );
};


export default Slide;
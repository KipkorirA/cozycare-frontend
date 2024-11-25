/* eslint-disable react/prop-types */

// Data for services to avoid repetition and make it easier to manage
const servicesData = [
  {
    title: "Nursing Care",
    imgSrc: "/images/2-removebg-preview.png",
    description: "",
    services: [
      "Wound Care: Providing care for wounds, including cleaning, dressing, and monitoring for infection.",
      "Medication Administration: Ensuring proper administration of prescribed medications, including oral, injectable, and topical medications.",
      "Vital Sign Monitoring: Measuring and monitoring vital signs such as blood pressure, heart rate, respiratory rate, and temperature.",
      "Tracheostomy Care: Assisting patients with tracheostomies, including suctioning, cleaning, and changing tubes.",
      "Catheter Care: Providing care for urinary catheters, including insertion, removal, and maintenance.",
      "Ostomy Care: Assisting with ostomies, including changing bags, skin care, and troubleshooting."
    ]
  },
  {
    title: "Chronic Disease Management",
    imgSrc: "/images/3-removebg-preview (1).png",
    description: "",
    services: [
      "Diabetes Management: Assisting with blood sugar monitoring, insulin administration, and dietary planning.",
      "Heart Disease Management: Supporting individuals with heart conditions, including monitoring vital signs, administering medications, and promoting healthy lifestyle changes.",
      "Alzheimer's & Dementia Disease Management: Providing specialized care for patients including memory aids, safety measures, and behavioral management techniques.",
      "Respiratory Disorder Management: Assisting individuals with respiratory conditions, such as COPD, asthma, or pulmonary fibrosis."
    ]
  },
  {
    title: "Post-Hospital Care",
    imgSrc: "/images/4-removebg-preview.png",
    description: "",
    services: [
      "Transitional Support: Assisting patients in transitioning from a hospital setting to their home environment.",
      "Medication Management: Ensuring proper medication adherence and administration.",
      "Wound Care: Providing care for any wounds or incisions acquired during hospitalization.",
      "Physical Therapy: Assisting with physical therapy exercises to aid in recovery.",
      "Monitoring Vital Signs: Regularly monitoring vital signs to assess recovery progress.",
      "Post-Surgery Recovery: Supporting individuals during their recovery from surgery."
    ]
  },
  {
    title: "Care Assistance",
    imgSrc: "/images/5-removebg-preview.png",
    description: "",
    services: [
      "Non-Medical Care: Assisting with daily living activities like bathing, dressing, meal preparation, and light housekeeping.",
      "Transportation Services: Accompanying clients on appointments, errands, or social outings.",
      "Companionship: Providing social interaction and emotional support."
    ]
  },
  {
    title: "Doula Services",
    imgSrc: "/images/6-removebg-preview.png",
    description: "",
    services: [
      "Prenatal Support:\n• Providing emotional support and guidance throughout pregnancy\n• Assisting with childbirth preparation, including breathing techniques and relaxation exercises\n• Offering information on pregnancy, childbirth, and postpartum care",
      "Labor Support:\n• Accompanying you to the hospital or birth center\n• Providing comfort measures and emotional support during labor\n• Assisting with communication with healthcare providers",
      "Postpartum Support:\n• Offering guidance on breastfeeding and newborn care\n• Providing emotional support and assistance with household tasks\n• Facilitating bonding between mother and baby"
    ]
  },
  {
    title: "Telehealth Services",
    imgSrc: "/images/7-removebg-preview.png",
    description: "",
    services: [
      "Virtual Consultations: Offering remote consultations with healthcare professionals.",
      "Follow-ups: Providing virtual follow-up care to monitor progress and address concerns."
    ]
  },
  {
    title: "Additional Services",
    imgSrc: "/images/8-removebg-preview.png",
    description: "",
    services: [
      "Respite Care: Offering temporary relief to family caregivers.",
      "Meal Delivery: Providing nutritious and delicious meals to clients.",
      "Home Modifications: Assisting with home modifications to improve safety and accessibility."
    ]
  },
  {
    title: "We are dedicated to:",
    imgSrc: "/images/9-removebg-preview.png",
    description: "",
    services: [
      "Personalized Care Plans: Tailoring our services to meet the unique needs and preferences of each client.",
      "Compassionate Caregivers: Employing caring and experienced professionals who are committed to providing the highest level of care.",
      "Safe and Comfortable Environments: Ensuring that our clients' homes are safe, clean, and conducive to their well-being.",
      "Continuous Improvement: Striving to stay up-to-date with the latest industry standards and best practices."
    ]
  }
];

const ServiceBlock = ({ title, imgSrc, description, services, index }) => (
  <section 
    className={`flex flex-wrap mb-8 sm:mb-12 lg:mb-20 p-4 sm:p-6 lg:p-8 hover:bg-gray-50/90 backdrop-blur-lg bg-white/40 transition-all duration-700 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 ${
      index === servicesData.length - 1 ? 'bg-green-900/10' : index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
    }`}
  >
    <div className="w-full lg:w-1/2 flex justify-center items-center p-2 sm:p-4 lg:p-12">
      <img 
        src={imgSrc} 
        alt={`${title} illustration`} 
        className={`max-w-[50%] sm:max-w-[75%] lg:max-w-[80%] h-auto transform hover:scale-110 transition-transform duration-700 filter hover:brightness-110 hover:drop-shadow-2xl ${
          index === servicesData.length - 1 ? 'animate-bounce' : ''
        }`}
        loading="lazy"
      />
    </div>

    <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-24 mt-4 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
      <h2 className={`text-xl sm:text-2xl lg:text-4xl font-monospace mb-3 sm:mb-4 lg:mb-8 transition-colors duration-500 transform hover:translate-x-3 font-bold ${
        index === servicesData.length - 1 ? 'text-green-900 hover:text-green-800' : 'text-gray-800 hover:text-gray-900'
      }`}>{title}</h2>
      <p className="font-bold text-base sm:text-lg lg:text-2xl leading-relaxed text-black">{description}</p>
      
      <ul className="list-disc pl-4 sm:pl-6 lg:pl-10 text-gray-700 mt-4 sm:mt-6 lg:mt-10 space-y-2 sm:space-y-3 lg:space-y-5">
        {services.map((service, serviceIndex) => (
          <li 
            key={serviceIndex} 
            className={`text-base sm:text-lg lg:text-2xl transition-all duration-500 cursor-pointer whitespace-pre-line transform hover:translate-x-2 hover:font-semibold ${
              index === servicesData.length - 1 ? 'text-green-900 hover:text-green-800' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <div className="bg-[#FFFDD0] font-sans min-h-screen w-full">
      <div className="relative w-full px-0 mx-auto">
        <img 
          src="/images/1-removebg-preview.png" 
          alt="Care" 
          className="absolute -right-2 sm:-right-4 lg:-right-8 -top-2 sm:-top-4 lg:-top-8 w-24 sm:w-32 lg:w-48 z-10 animate-pulse hover:animate-bounce"
          loading="lazy"
        />
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl pt-4 sm:pt-3 lg:pt-6 pb-4 sm:pb-5 lg:pb-8 pr-12 sm:pr-16 lg:pr-24 text-left font-monospace text-gray-800 font-bold px-4 sm:px-5 lg:px-8 hover:text-gray-900 transition-colors duration-500">
            Our In-Home <br />Care Services
          </h1>
          <div className="w-12 sm:w-56 lg:w-96 h-1.5 bg-yellow-500 rounded-full ml-4 sm:ml-5 lg:ml-8 mb-6 sm:mb-8 lg:mb-20 transform hover:scale-x-110 transition-transform duration-500 hover:bg-yellow-500" />
          
          <div className="w-full px-4 sm:px-5 lg:px-8 mb-6 sm:mb-10 lg:mb-24">
            <div className="max-w-full">
              <strong className="text-lg sm:text-2xl lg:text-4xl block mb-3 sm:mb-4 lg:mb-8 hover:text-yellow-600 transition-colors duration-500">Care Where You Reside</strong>
              <p className=" sm:text-xl lg:text-3xl leading-relaxed">
                Cozycare offers a wide range of personalized in-home care services designed to meet your unique needs and preferences. Our goal is to help you maintain your independence and quality of life while receiving the support you require.
              </p>
              <p className="text-lg sm:text-xl lg:text-3xl mt-6 sm:mt-8 lg:mt-12 text-center font-bold hover:text-gray-900 transition-colors duration-500">Our Services Include:</p>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-24 px-4 sm:px-5 lg:px-8">
            {servicesData.map((service, index) => (
              <ServiceBlock
                key={index}
                index={index}
                title={service.title}
                imgSrc={service.imgSrc}
                description={service.description}
                services={service.services}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
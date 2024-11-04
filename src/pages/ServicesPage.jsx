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
      "_Prenatal Support:_\n• Providing emotional support and guidance throughout pregnancy\n• Assisting with childbirth preparation, including breathing techniques and relaxation exercises\n• Offering information on pregnancy, childbirth, and postpartum care",
      "_Labor Support:_\n• Accompanying you to the hospital or birth center\n• Providing comfort measures and emotional support during labor\n• Assisting with communication with healthcare providers",
      "_Postpartum Support:_\n• Offering guidance on breastfeeding and newborn care\n• Providing emotional support and assistance with household tasks\n• Facilitating bonding between mother and baby"
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
    className={`flex flex-wrap mb-8 sm:mb-16 p-6 sm:p-10 hover:bg-gray-50/90 backdrop-blur-lg bg-white/40 transition-all duration-700 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 ${
      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
    }`}
  >
    <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6">
      <img 
        src={imgSrc} 
        alt={`${title} illustration`} 
        className="max-w-[85%] sm:max-w-full h-auto transform hover:scale-115 transition-transform duration-700 filter hover:brightness-115 hover:drop-shadow-xl"
        loading="lazy"
      />
    </div>

    <div className="w-full md:w-1/2 px-6 sm:px-10 mt-6 md:mt-0">
      <h2 className="text-2xl sm:text-4xl font-monospace mb-4 sm:mb-6 text-gray-800 hover:text-gray-900 transition-colors duration-500 transform hover:translate-x-3 font-bold">{title}</h2>
      <p className="font-bold text-lg sm:text-xl leading-relaxed text-black">{description}</p>
      <ul className="list-disc pl-6 sm:pl-8 text-gray-700 mt-6 sm:mt-8 space-y-3 sm:space-y-4">
        {services.map((service, index) => (
          <li 
            key={index} 
            className="text-lg sm:text-xl hover:text-gray-900 transition-all duration-500 cursor-pointer whitespace-pre-line transform hover:translate-x-2 hover:font-semibold"
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
    <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 font-sans min-h-screen w-full">
      <div className="relative w-full px-0 max-w-full mx-auto">
        <img 
          src="/images/1-removebg-preview.png" 
          alt="Care" 
          className="absolute -right-6 -top-6 w-auto sm:w-100 z-10 animate-pulse hover:animate-bounce"
          loading="lazy"
        />
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl pt-4 pb-6 pr-16 sm:pr-20 text-left font-monospace text-gray-800 font-bold px-6 hover:text-gray-900 transition-colors duration-500">
            Our In-Home <br />Care Services
          </h1>
          <div className="w-56 sm:w-80 h-1.5 bg-yellow-600 rounded-full ml-6 mb-10 sm:mb-16 transform hover:scale-x-110 transition-transform duration-500 hover:bg-yellow-500" />
          <div className="max-w-full mx-auto mb-10 sm:mb-20 px-6">
            <p className="text-xl sm:text-2xl leading-relaxed mr-56 pr-56">
              <strong className="text-2xl sm:text-3xl block mb-4 sm:mb-6 hover:text-yellow-600 transition-colors duration-500">Care Where You Reside</strong>
              Cozycare offers a wide range of personalized in-home care services designed to meet your unique needs and preferences. Our goal is to help you maintain your independence and quality of life while receiving the support you require.
            </p>
            <p className="text-xl sm:text-2xl mt-8 sm:mt-10 text-center font-bold hover:text-gray-900 transition-colors duration-500">Our Services Include:</p>
          </div>

          <div className="space-y-10 sm:space-y-20 px-6">
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
/* eslint-disable react/prop-types */

// Data for services to avoid repetition and make it easier to manage
const servicesData = [
  {
    title: "Nursing Care",
    imgSrc: "/images/2-removebg-preview.png",
    description: "Providing professional nursing care tailored to your needs.",
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
    description: "Helping manage long-term illnesses for a better quality of life.",
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
    description: "Supporting recovery and ensuring a smooth transition from hospital to home.",
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
    description: "Providing non-medical care and assistance with daily living activities.",
    services: [
      "Non-Medical Care: Assisting with daily living activities like bathing, dressing, meal preparation, and light housekeeping.",
      "Transportation Services: Accompanying clients on appointments, errands, or social outings.",
      "Companionship: Providing social interaction and emotional support."
    ]
  }
];

// Reusable service block component

const ServiceBlock = ({ title, imgSrc, description, services, index }) => (
  <section className={`flex flex-wrap mb-16 p-8 hover:bg-gray-50 transition-all duration-300 rounded-xl ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
    <div className="flex-1 flex justify-center items-center p-4">
      <img src={imgSrc} alt={`${title} illustration`} className="max-w-full h-auto transform hover:scale-105 transition-transform duration-300" />
    </div>

    <div className="flex-1 px-8">
      <h2 className="text-3xl font-monospace mb-4 text-gray-700 hover:text-gray-900 transition-colors duration-300">{title}</h2>
      <p className="font-bold text-lg leading-relaxed text-black">{description}</p>
      <ul className="list-disc pl-6 text-gray-600 mt-6 space-y-3">
        {services.map((service, index) => (
          <li key={index} className="text-lg hover:text-gray-900 transition-colors duration-200">{service}</li>
        ))}
      </ul>
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 font-sans min-h-screen w-full">
      <div className="relative w-full">
        <img src="/public/images/1-removebg-preview.png" alt="Care" className="absolute right-0 top-8 w-48 z-10" />
        <div className="w-full">
          <h1 className="text-5xl pt-32 pb-4 font-monospace text-gray-800 text-center">Our In-Home Care Services</h1>
          <div className="w-72 h-1 bg-gray-600 rounded mb-12 mx-auto" />
          <div className="max-w-6xl mx-auto mb-16 px-4">
            <p className="text-xl text-center">
              <strong className="text-2xl block mb-4">Care Where You Reside</strong>
              Cozycare offers a wide range of personalized in-home care services designed to meet your unique needs and preferences. Our goal is to help you maintain your independence and quality of life while receiving the support you require.
            </p>
            <p className="text-xl mt-8 text-center"><strong>Our Services Include:</strong></p>
          </div>

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
  );
};

export default ServicesPage;
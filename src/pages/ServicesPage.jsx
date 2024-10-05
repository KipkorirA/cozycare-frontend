/* eslint-disable react/prop-types */
import "./styles/ServicesPage.css"; // You can remove this import if you are not using any custom CSS anymore

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
    imgSrc: "/images/3-removebg-preview.png",
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
const ServiceBlock = ({ title, imgSrc, description, services }) => (
  <section className="flex flex-wrap mb-16">
    <div className="flex-1 flex justify-center items-center">
      <img src={imgSrc} alt={`${title} illustration`} className="max-w-full" />
    </div>
    <div className="flex-1 pl-8">
      <h2 className="text-3xl font-monospace mb-4 text-gray-700">{title}</h2>
      <p className="font-bold line-height-8 text-black">{description}</p>
      <ul className="list-disc pl-6 text-gray-600 mt-4">
        {services.map((service, index) => (
          <li key={index} className="mb-2 text-lg">{service}</li>
        ))}
      </ul>
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 font-sans pt-0 mt-0">
      <h1 className="text-5xl pt-32 pb-4 pl-8 font-monospace text-gray-800">Our In-Home Care Services</h1>
      <div className="w-72 h-1 bg-gray-600 rounded mb-12 pl-8" />
      <div className="pl-8 pr-10 mr-10">
        <p className="text-xl">
          <strong>Care Where You Reside</strong>
          <br />
          Cozycare offers a wide range of personalized in-home care services designed to meet your unique needs and preferences. Our goal is to help you maintain your independence and quality of life while receiving the support you require.
        </p>
        <p className="text-xl mt-4"><strong>Our Services Include:</strong></p>
        <div>
          <img src="/public/images/1-removebg-preview.png" alt="Care" className="absolute top-16 right-8 w-1/3" />
        </div>
      </div>

      {servicesData.map((service, index) => (
        <ServiceBlock
          key={index}
          title={service.title}
          imgSrc={service.imgSrc}
          description={service.description}
          services={service.services}
        />
      ))}
    </div>
  );
};

export default ServicesPage;

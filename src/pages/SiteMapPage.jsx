import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const SiteMapPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl bg-cream">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-emerald-800">
        Site Map
      </h1>

      <div className="grid grid-cols-1 gap-8 mt-8">
        <div className="bg-cream rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <LocationOnIcon className="text-5xl text-emerald-800 mr-4" />
              <h2 className="text-3xl font-semibold text-emerald-800">Our Location is Your Location</h2>
            </div>
            <p className="text-emerald-800 mb-4">
              At CozyCare, we bring primary care, palliative care, and hospice care to you. Whether you're at home, in a senior residency community, or in a long-term care facility, we're here to provide services that are convenient and accessible.
            </p>
            <p className="text-emerald-800">
              With us, there's no need to worry about transportation or mobility. Our location is your location.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cream rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="p-8 h-full">
              <div className="flex items-center mb-6">
                <HomeIcon className="text-4xl text-emerald-800 mr-4" />
                <h3 className="text-2xl font-semibold text-emerald-800">Services at Your Location</h3>
              </div>
              <ul className="space-y-2 text-emerald-800">
                <li className="flex items-center before:content-['•'] before:mr-2 before:text-emerald-800">Primary Care</li>
                <li className="flex items-center before:content-['•'] before:mr-2 before:text-emerald-800">Palliative Care</li>
                <li className="flex items-center before:content-['•'] before:mr-2 before:text-emerald-800">Hospice Care</li>
              </ul>
            </div>
          </div>

          <div className="bg-cream rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="p-8 h-full">
              <div className="flex items-center mb-6">
                <LocalHospitalIcon className="text-4xl text-emerald-800 mr-4" />
                <h3 className="text-2xl font-semibold text-emerald-800">Service Locations</h3>
              </div>
              <ul className="space-y-2 text-emerald-800">
                <li className="flex items-center before:content-['•'] before:mr-2 before:text-emerald-800">Home Care</li>
                <li className="flex items-center before:content-['•'] before:mr-2 before:text-emerald-800">Senior Residency Communities</li>
                <li className="flex items-center before:content-['•'] before:mr-2 before:text-emerald-800">Long-term Care Facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMapPage;
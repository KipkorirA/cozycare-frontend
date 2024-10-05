
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/home/Home';
import AboutSection from './components/about/About';
import ServicesSection from './components/services/Services';
import PricingSection from './components/pricing/Pricing';
import CareersSection from './components/careers/Careers';
import FeedbackSection from './components/feedback/Feedback';
import ContactSection from './components/contact/ContactForm';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import CareersPage from './pages/CareersPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import SubscribePage from './pages/SubscribePage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import SubscriptionSuccessfulPage from './pages/SubscriptionSucccessfulPage';
import NotFoundPage from './pages/NotFoundPage'; // Import the NotFoundPage
import PrivacyAndCookiePolicyPage from './pages/PrivacyAndCookiePolicyPage'; // Import Privacy Policy Page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar at the top */}
        <Navbar />

        {/* Routes for each section and page */}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HomeSection />
                <AboutSection />
                <ServicesSection />
                <FeedbackSection />
                <PricingSection />
                <CareersSection />
                <ContactSection />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/privacy-policy" element={<PrivacyAndCookiePolicyPage />} />
            <Route path="/subscription-successful" element={<SubscriptionSuccessfulPage />} />

            {/* Catch all unmatched routes and render the NotFoundPage */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

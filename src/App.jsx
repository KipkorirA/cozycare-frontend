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
import SubscriptionSuccessfulPage from './pages/SubscriptionSuccessfulPage';
import NotFoundPage from './pages/NotFoundPage'; // Import the NotFoundPage
import PrivacyAndCookiePolicyPage from './pages/PrivacyAndCookiePolicyPage'; // Import Privacy Policy Page
import CareerManage from './pages/manage/CareerManage'; // Import CareerManage
import FeedbackManage from './pages/manage/FeedbackManage'; // Import FeedbackManage
import SubscriptionManage from './pages/manage/SubscriptionManage'; // Import SubscriptionManage
import Manage from './pages/manage/Manage'; // Import Manage component
import BlogPage from './pages/BlogPage'; // Import BlogPage
import BlogManage from './pages/manage/BlogManage'; // Import BlogManage
import ContactManage from './pages/manage/ContactManage'; // Import ContactManage
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Change to HashRouter
import RealTimeChat from './components/RealTimeChat';
import ApplicationPage from './pages/ApplicationPage';
import SiteMapPage from './pages/SiteMapPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

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
            <Route path="/application/:id" element={<ApplicationPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/sitemap" element={<SiteMapPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            
            {/* Management routes */}
            <Route path="/manage" element={<Manage />} />  {/* Added route for Manage component */}
            <Route path="/manage/careers" element={<CareerManage />} />
            <Route path="/manage/feedback" element={<FeedbackManage />} />
            <Route path="/manage/subscriptions" element={<SubscriptionManage />} />
            <Route path="/manage/blog" element={<BlogManage />} />
            <Route path="/manage/contact" element={<ContactManage />} />

            {/* Catch all unmatched routes and render the NotFoundPage */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <RealTimeChat />

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
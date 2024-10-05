import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for icons
import 'slick-carousel/slick/slick.css'; // Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick Carousel Theme CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* No need for BrowserRouter since it's a single-page app */}
  </StrictMode>
);

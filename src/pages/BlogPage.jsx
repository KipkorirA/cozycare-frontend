    import { format } from 'date-fns';
    import { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
  
    const BlogPage = () => {
      const fallbackData = [
        {
          title: "Welcome to CozyCare Health Services",
          name: "CozyCare Team",
          created_at: new Date().toISOString(),
          description: "CozyCare Health is your trusted partner in providing comprehensive healthcare solutions. We specialize in professional nursing services, premium senior residency facilities, and compassionate long-term care services. Our team of experienced healthcare professionals is dedicated to ensuring the highest quality of life for our residents and patients. We offer 24/7 nursing care, specialized medical attention, and a warm, home-like environment for seniors.",
          image_url: null
        },
        {
          title: "Our Senior Residency Services",
          name: "Senior Care Division",
          created_at: new Date().toISOString(),
          description: "Experience exceptional senior living at CozyCare Health's residential facilities. We provide comfortable accommodations, nutritious meals, engaging activities, and round-the-clock medical supervision. Our residences are designed to promote independence while ensuring safety and comfort for all our senior residents.",
          image_url: null
        },
        {
          title: "Long-term Care Excellence",
          name: "Care Services",
          created_at: new Date().toISOString(),
          description: "Our long-term care services are tailored to meet individual needs with dignity and respect. We offer specialized care plans, rehabilitation services, memory care, and continuous medical monitoring. Our dedicated staff ensures that each resident receives personalized attention and support for their unique healthcare requirements.",
          image_url: null
        }
      ];

      const [blogPosts, setBlogPosts] = useState(fallbackData);
      const [currentIndex, setCurrentIndex] = useState(0);
  
      useEffect(() => {
        const fetchBlogPosts = async () => {
          try {
            const response = await fetch('https://cozycare-backend-g56w.onrender.com/blogs');
            const data = await response.json();
            if (data.length > 0) {
              setBlogPosts(data);
            }
          } catch (error) {
            console.error('Error fetching blog posts:', error);
          }
        };
  
        fetchBlogPosts();
      }, []);
  
      const nextPost = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
      };
  
      const previousPost = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length);
      };
  
      const blogPost = blogPosts[currentIndex];
      const imageUrl = blogPost.image_url ? `https://cozycare-backend-g56w.onrender.com/${blogPost.image_url}` : null;
      const videoUrl = blogPost.video_url ? `https://cozycare-backend-g56w.onrender.com/${blogPost.video_url}` : null;
  
      return (
        <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-[#FFFDD0] to-white">
          <AnimatePresence mode="wait">
            <motion.article
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 mb-8 backdrop-blur-sm bg-opacity-90"
            >
              <div className="p-6">
                <motion.h1
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-4xl font-bold mb-4 text-gray-900 hover:text-green-600 transition-colors duration-200"
                >
                  {blogPost.title}
                </motion.h1>
                <div className="flex items-center mb-4 space-x-4">
                  <span className="text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">
                    {blogPost.name}
                  </span>
                  <span className="text-green-600 text-sm bg-green-50 px-3 py-1 rounded-full">
                    {format(new Date(blogPost.created_at), 'MMMM dd, yyyy')}
                  </span>
                </div>
                {imageUrl && (
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    src={imageUrl}
                    alt={blogPost.title}
                    className="w-full h-80 object-cover mb-6 rounded-lg shadow-md"
                  />
                )}
                {videoUrl && (
                  <motion.video
                    whileHover={{ scale: 1.02 }}
                    src={videoUrl}
                    controls
                    className="w-full mb-6 rounded-lg shadow-md focus:outline-none"
                  />
                )}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-green-700 leading-relaxed mb-6 hover:text-green-900 transition-colors duration-200 text-lg"
                >
                  {blogPost.description}
                </motion.p>
              </div>
            </motion.article>
          </AnimatePresence>
          
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={previousPost}
              className="px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>←</span>
              <span>Previous</span>
            </motion.button>
            <span className="px-4 py-2 bg-green-100 rounded-full font-medium">
              {currentIndex + 1} of {blogPosts.length}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPost}
              className="px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Next</span>
              <span>→</span>
            </motion.button>
          </div>
        </div>
      );
    };
  
    export default BlogPage;
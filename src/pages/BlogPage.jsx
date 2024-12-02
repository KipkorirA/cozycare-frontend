import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Note: Capitalized 'Link'

const BlogPage = () => {
  const fallbackData = [
    {
      title: "Welcome to CozyCare Health Services",
      name: "CozyCare Team",
      created_at: new Date().toISOString(),
      description: "CozyCare Health is your trusted partner in providing comprehensive healthcare solutions. We specialize in professional nursing services, premium senior residency facilities, and compassionate long-term care services. Our team of experienced healthcare professionals is dedicated to ensuring the highest quality of life for our residents and patients. We offer 24/7 nursing care, specialized medical attention, and a warm, home-like environment for seniors.",
      image_url: null,
    },
    {
      title: "Our Senior Residency Services",
      name: "Senior Care Division",
      created_at: new Date().toISOString(),
      description: "Experience exceptional senior living at CozyCare Health's residential facilities. We provide comfortable accommodations, nutritious meals, engaging activities, and round-the-clock medical supervision. Our residences are designed to promote independence while ensuring safety and comfort for all our senior residents.",
      image_url: null,
    },
    {
      title: "Long-term Care Excellence",
      name: "Care Services",
      created_at: new Date().toISOString(),
      description: "Our long-term care services are tailored to meet individual needs with dignity and respect. We offer specialized care plans, rehabilitation services, memory care, and continuous medical monitoring. Our dedicated staff ensures that each resident receives personalized attention and support for their unique healthcare requirements.",
      image_url: null,
    },
  ];

  const [blogPosts, setBlogPosts] = useState(fallbackData);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-[#FFFDD0] to-white">
      {!selectedPost ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPosts.map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedPost(post)}
              >
                {post.image_url && (
                  <img
                    src={`https://cozycare-backend-g56w.onrender.com/${post.image_url}`}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-900 hover:text-green-600">
                    {post.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/subscribe">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe to CozyCare and
                Stay updated with our latest health tips, services, and offers. Join our newsletter today!
              </motion.button>
            </Link>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === pageNum
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-green-600 hover:bg-green-100'
                } transition-colors duration-300`}
              >
                {pageNum}
              </button>
            ))}
          </div>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.article
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
                {selectedPost.title}
              </motion.h1>
              <div className="flex items-center mb-4 space-x-4">
                <span className="text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">
                  {selectedPost.name}
                </span>
                <span className="text-green-600 text-sm bg-green-50 px-3 py-1 rounded-full">
                  {format(new Date(selectedPost.created_at), 'MMMM dd, yyyy')}
                </span>
              </div>
              {selectedPost.image_url && (
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={`https://cozycare-backend-g56w.onrender.com/${selectedPost.image_url}`}
                  alt={selectedPost.title}
                  className="w-full h-80 object-cover mb-6 rounded-lg shadow-md"
                />
              )}
              {selectedPost.video_url && (
                <motion.video
                  whileHover={{ scale: 1.02 }}
                  src={`https://cozycare-backend-g56w.onrender.com/${selectedPost.video_url}`}
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
                {selectedPost.description}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPost(null)}
                className="px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Back to Posts
              </motion.button>
            </div>
          </motion.article>
        </AnimatePresence>
      )}
    </div>
  );
};

export default BlogPage;

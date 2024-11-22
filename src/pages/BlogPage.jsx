  import { format } from 'date-fns';
  import { useState, useEffect } from 'react';

  const BlogPage = () => {
    const [blogPost, setBlogPost] = useState(null);

    useEffect(() => {
      const fetchBlogPost = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/blog-post');
          const data = await response.json();
          setBlogPost(data);
        } catch (error) {
          console.error('Error fetching blog post:', error);
        }
      };

      fetchBlogPost();
    }, []);

    if (!blogPost) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen bg-gray-50">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors duration-200">{blogPost.title}</h1>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 mr-4 font-medium">{blogPost.name}</span>
              <span className="text-gray-500 text-sm">
                {format(new Date(blogPost.timestamp), 'MMMM dd, yyyy')}
              </span>
            </div>
            {blogPost.image_url && (
              <img
                src={blogPost.image_url}
                alt={blogPost.title}
                className="w-full h-64 object-cover mb-6 rounded-lg hover:opacity-90 transition-opacity duration-200"
              />
            )}
            {blogPost.video_url && (
              <video
                src={blogPost.video_url}
                controls
                className="w-full mb-6 rounded-lg focus:outline-none"
              />
            )}
            <p className="text-gray-700 leading-relaxed mb-6 hover:text-gray-900 transition-colors duration-200">
              {blogPost.description}
            </p>
          </div>
        </article>
      </div>
    );
  };

  export default BlogPage;

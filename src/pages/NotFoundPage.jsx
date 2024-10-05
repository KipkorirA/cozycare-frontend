const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-800 text-center p-5">
      <h1 className="text-4xl text-red-600 mb-5">404 - Page Not Found</h1>
      <p className="text-xl mb-2">Sorry, the page you are looking for does not exist.</p>
      <p className="mb-2">
        You can go back to the <a href="/" className="text-blue-500 underline hover:no-underline">home page</a> or check the URL for mistakes.
      </p>
      <img 
        src="https://media.giphy.com/media/3oEjI6SIIHBdRx6z0Q/giphy.gif" 
        alt="Page Not Found" 
        className="w-72 h-auto my-5" 
      />
    </div>
  );
};

export default NotFoundPage;

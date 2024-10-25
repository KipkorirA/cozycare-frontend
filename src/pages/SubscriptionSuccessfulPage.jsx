const SubscriptionSuccessfulPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-50 text-gray-800 p-5 text-center font-sans">
      <h1 className="font-[Veteran Typewriter] text-4xl mb-5 text-green-600">Subscription Successful!</h1>
      {/* Add celebration GIF */}
      <img 
        src="https://media.tenor.com/hCh_8LULEk4AAAAj/thank-you.gif" 
        alt="Celebration" 
        className="w-72 h-auto my-5" 
      />
      <p className="text-xl leading-relaxed mb-2 max-w-2xl">
        Thank you for subscribing to CozyCare. You will now receive our latest health tips, services, and offers.
      </p>
      <p className="text-xl leading-relaxed mb-5 max-w-2xl">We appreciate your interest!</p>
      {/* Optionally, add a button to return to the homepage */}
      <button 
        onClick={() => window.location.href = '/'} 
        className="bg-green-600 text-white rounded px-4 py-2 text-lg cursor-pointer transition duration-300 hover:bg-green-500"
      >
        Go to Home
      </button>
    </div>
  );
};

export default SubscriptionSuccessfulPage;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 bg-pattern p-4">
      <div className="text-center max-w-md w-full bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <div className="w-20 h-20 bg-brand-yellow rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-brand-black">Page not found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="brand-button inline-block"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

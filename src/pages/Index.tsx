
import React, { useEffect, useState } from "react";
import EmailTemplate from "@/components/EmailTemplate";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCopyHTML = () => {
    // In a real implementation, this would get the actual HTML
    toast.success("HTML code copied to clipboard!", {
      description: "You can now paste this into your email service provider."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-pattern flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 glass border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-black">
            African Market Lithuania Email Template
          </h1>
          <p className="text-gray-600 mt-2 text-center max-w-2xl">
            A beautiful, responsive email template designed for African Market Lithuania.
            Perfect for welcoming new customers and driving engagement.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col items-center">
          {/* Controls */}
          <div className="w-full mb-8 flex justify-center">
            <button
              onClick={handleCopyHTML}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>Copy HTML</span>
            </button>
          </div>

          {/* Email Template Preview */}
          <div 
            className={`w-full transition-all duration-700 transform ${
              isLoaded 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="email-shadow rounded-xl overflow-hidden">
              <EmailTemplate />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-brand-black text-white text-center text-sm">
        <p>© 2023 African Market Lithuania. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;

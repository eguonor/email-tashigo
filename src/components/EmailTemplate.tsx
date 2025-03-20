
import React from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

interface EmailTemplateProps {
  recipientName?: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ 
  recipientName = "Customer" 
}) => {
  return (
    <div className="max-w-2xl mx-auto overflow-hidden animate-fade-in">
      <div className="bg-brand-black text-white p-8 rounded-t-xl flex flex-col items-center">
        {/* Logo Section */}
        <div className="w-48 h-48 bg-brand-yellow rounded-lg mb-6 flex items-center justify-center overflow-hidden animate-bounce-subtle">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/978d307c-3254-43b8-b64c-e606c5756376.png" 
              alt="African Delights Logo" 
              className="w-full h-auto p-2"
            />
          </div>
        </div>
        
        {/* Header */}
        <h1 className="text-4xl font-bold mt-6 mb-2 text-center animate-slide-up">
          Welcome to African Delights Store!
        </h1>
        
        {/* Main Content */}
        <div className="text-xl opacity-80 text-center mt-4 mb-8 max-w-md">
          <p className="mb-4">
            You've activated your customer account.
          </p>
          <p>
            Next time you shop with us, log in for faster checkout.
          </p>
        </div>
        
        {/* CTA Button */}
        <a 
          href="#" 
          className="brand-button w-full text-center text-lg my-4 block"
        >
          Visit our store
        </a>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-900 p-8 rounded-b-xl text-white text-opacity-80">
        <div className="border-t border-gray-700 pt-6 mb-6" />
        
        <div className="text-center mb-6">
          <p>
            If you have any questions, reply to this email or contact us at{" "}
            <a href="mailto:support@africandelightstore.com" className="text-brand-yellow hover:underline">
              support@africandelightstore.com
            </a>
          </p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a 
            href="#" 
            className="social-icon bg-brand-primary bg-opacity-20 p-3 rounded-full"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-brand-yellow" />
          </a>
          <a 
            href="#" 
            className="social-icon bg-brand-primary bg-opacity-20 p-3 rounded-full"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-brand-yellow" />
          </a>
          <a 
            href="#" 
            className="social-icon bg-brand-primary bg-opacity-20 p-3 rounded-full"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-brand-yellow" />
          </a>
        </div>
        
        <div className="text-center text-xs mt-6 text-gray-400">
          <p>© 2023 African Delights. All rights reserved.</p>
          <p className="mt-1">Vilnius, Lithuania</p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;

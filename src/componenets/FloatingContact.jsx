// src/components/FloatingContact.jsx
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <>
      {/* Call Button - Left Bottom */}
      <a
        href="tel:+919423444184" // no spaces
        className="
          fixed 
          bottom-4 left-4 sm:bottom-5 sm:left-5 
          w-12 h-12 sm:w-16 sm:h-16 
          bg-red-600 hover:bg-red-700 
          text-white rounded-full 
          flex items-center justify-center 
          shadow-lg animate-pulse 
          z-50 
          transition-all
        "
      >
        <FaPhoneAlt className="w-5 h-5 sm:w-7 sm:h-7" />
      </a>

      {/* WhatsApp Button - Right Bottom */}
      <a
        href="https://wa.me/919423444184" // no spaces
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed 
          bottom-4 right-4 sm:bottom-5 sm:right-5 
          w-12 h-12 sm:w-16 sm:h-16 
          bg-green-600 hover:bg-green-700 
          text-white rounded-full 
          flex items-center justify-center 
          shadow-lg animate-pulse 
          z-50 
          transition-all
        "
      >
        <FaWhatsapp className="w-5 h-5 sm:w-7 sm:h-7" />
      </a>
    </>
  );
}
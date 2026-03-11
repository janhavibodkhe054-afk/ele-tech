// src/componenets/FloatingContact.jsx
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <>
      {/* Call Button - Left Bottom */}
      <a
        href="tel:+919423444184" // no spaces
        className="fixed bottom-5 left-5 w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg animate-pulse z-50 transition-all"
      >
        <FaPhoneAlt size={28} />
      </a>

      {/* WhatsApp Button - Right Bottom */}
      <a
        href="https://wa.me/919423444184" // no spaces
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg animate-pulse z-50 transition-all"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}
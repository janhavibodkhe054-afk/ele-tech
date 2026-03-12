import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroHome = () => {
  const navigate = useNavigate();

  const handleServices = () => {
    navigate("/about");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlnwGzGo0RPDQ3WTn8oy49wcK6Pf3jqt6xQ&s",
    "https://aramarkengineering.com/wp-content/themes/yootheme/cache/fd/bms_team_slide_3840-2160-scaled-fd019a66.jpeg",
    "https://www.tecon.ae/wp-content/uploads/2023/05/Kohler-webinar-image.png",
    "https://qentelli.com/sites/default/files/inline-images/text-section.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden overflow-x-hidden">

        {/* BACKGROUND SLIDER */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 left-0 right-0 w-screen h-full bg-center bg-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-[520px] sm:min-h-[600px] md:min-h-[650px] flex items-center">

          <div className="text-white max-w-xl md:max-w-2xl animate-[fadeUp_1s_ease-out]">

            <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-200 mb-2">
              Online · Design · Construction
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Get Greatest{" "}
              <span className="bg-orange-500 px-2 sm:px-3 py-1 rounded">
                Service
              </span>
              <br />
              From Our Company
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
              Engineering solutions focused on quality, reliability and
              performance. We deliver turnkey mechanical, electrical and
              infrastructure projects tailored to industrial needs.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">

              <button
                onClick={handleServices}
                className="bg-orange-500 hover:bg-orange-600 px-5 py-2.5 font-semibold rounded transition"
              >
                About Us →
              </button>

              <button
                onClick={handleContact}
                className="border border-white px-5 py-2.5 font-semibold rounded hover:bg-white hover:text-black transition"
              >
                Contact Us →
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* OVERLAP CARDS */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 -mt-12 sm:-mt-16 md:-mt-20 overflow-x-hidden">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-[fadeUp_1.2s_ease-out]">

          <div className="bg-white p-6 md:p-8 text-center rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              Automation Industry
            </h3>
            <p className="text-gray-600 text-sm">
              Productivity automation solutions helping industries improve
              operational efficiency.
            </p>
          </div>

          <div className="bg-orange-500 text-white p-6 md:p-8 text-center rounded-lg shadow-lg transition">
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              Construction Industry
            </h3>
            <p className="text-sm">
              Reliable engineering execution for construction and industrial
              infrastructure projects.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 text-center rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              Real Estate Industry
            </h3>
            <p className="text-gray-600 text-sm">
              Electrical and infrastructure solutions for modern commercial
              and residential developments.
            </p>
          </div>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

    </div>
  );
};

export default HeroHome;
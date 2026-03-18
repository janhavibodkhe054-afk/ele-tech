import React from "react";
import { FaPhoneAlt, FaTruck, FaClock, FaGlobe } from "react-icons/fa";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const WhoHome = () => {
  const navigate = useNavigate();

  const handleDiscoverMore = () => {
    navigate("/about");
  };

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE AREA */}
          <div className="relative flex justify-center order-2 md:order-1">

            {/* TOP DOT PATTERN (hidden on very small screens) */}
            <div className="hidden sm:grid absolute -top-6 -right-2 grid-cols-6 gap-2 opacity-20 z-0">
              {[...Array(36)].map((_, i) => (
                <span key={i} className="w-2 h-2 bg-gray-400 rounded-full"></span>
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="relative w-full sm:w-10/12 md:w-full max-w-md z-10">
              <img
                src="/who.webp"
                alt="Engineering"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* SMALL IMAGE */}
            <img
              src="/image1.jpg"
              alt="Industry"
              className="hidden sm:block absolute bottom-[-25px] right-6 w-40 sm:w-48 md:w-52 rounded-2xl shadow-2xl border-[6px] border-white z-20"
            />

            {/* BOTTOM DOT PATTERN */}
            <div className="hidden sm:grid absolute -bottom-10 left-6 grid-cols-6 gap-2 opacity-20 z-0">
              {[...Array(36)].map((_, i) => (
                <span key={i} className="w-2 h-2 bg-gray-400 rounded-full"></span>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 md:order-2">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-snug text-gray-800">
              <span className="text-orange-500">
                Delivering Modern Engineering &
              </span>
              <br />
              Industrial Solutions
            </h2>

            <p className="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base text-justify">
              ELE-TECH Engineering Solutions was founded in Pune in 2018 as an
              engineering firm delivering turnkey projects for the automobile
              industry.
            </p>

            <p className="mt-3 text-gray-500 leading-relaxed text-sm sm:text-base text-justify">
              What began as a focused initiative quickly evolved into a
              specialist organization offering comprehensive industrial
              electrical and mechanical solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-6">

              <button
                onClick={handleDiscoverMore}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md transition w-full sm:w-auto"
              >
                Discover More
              </button>

              <div className="flex items-center gap-3 text-gray-700">
                <FaPhoneAlt className="text-orange-500 text-lg" />
                <div>
                  <p className="text-xs text-gray-400">Call Us Now</p>
                  <p className="font-semibold text-sm sm:text-base">
                    +91 9423444184
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-20">

          {/* FEATURE 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FaTruck className="text-orange-500 text-lg sm:text-xl" />
            </div>
            <h4 className="font-semibold text-lg text-gray-800">
              Experience And Expertise
            </h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Years of industry experience delivering reliable transportation
              solutions across multiple sectors.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FaClock className="text-orange-500 text-lg sm:text-xl" />
            </div>
            <h4 className="font-semibold text-lg text-gray-800">
              Reliability And Timeliness
            </h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              On-time deliveries with efficient logistics planning to ensure
              smooth and dependable service.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FaGlobe className="text-orange-500 text-lg sm:text-xl" />
            </div>
            <h4 className="font-semibold text-lg text-gray-800">
              Comprehensive Services
            </h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              End-to-end transportation services designed to meet diverse
              business and logistics needs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoHome;
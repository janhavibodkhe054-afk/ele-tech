import React, { useState } from "react";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const VisionMission = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(null);

  const handleclick = () => {
    navigate("/about");
  };

  const services = [
    {
      id: 1,
      title: "Our Vision",
      description:
        "A trusted engineering partner delivering high-quality turnkey electrical and mechanical solutions for sustainable industrial growth.",
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "Providing customized, process-driven engineering solutions with uncompromised quality, safety, and reliability.",
    },
    {
      id: 3,
      title: "Our Core Values",
      description:
        "Integrity, excellence, innovation, and sustainability guide every engineering solution we deliver.",
    },
  ];

  return (
    <section className="relative w-full overflow-x-hidden">

      <div
        className="w-full bg-center bg-cover"
        style={{ backgroundImage: "url('/vision.avif')" }}
      >
        <div className="bg-black/70">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-28">

            {/* Heading */}
            <div className="text-center text-white mb-10 sm:mb-14">

              <p className="uppercase tracking-[3px] sm:tracking-[4px] text-orange-400 font-semibold mb-2 text-xs sm:text-sm md:text-base">
                What We Do
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Vision, Mission & Core Values
              </h2>

              <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

              <p className="max-w-2xl mx-auto mt-4 text-gray-200 text-sm sm:text-base md:text-lg">
                Delivering engineering excellence through innovation,
                reliability, and structured execution.
              </p>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="flip-card"
                  onClick={() =>
                    setFlipped(flipped === index ? null : index)
                  }
                >

                  <div
                    className={`flip-card-inner ${
                      flipped === index ? "flipped" : ""
                    }`}
                  >

                    {/* Front */}
                    <div className="flip-card-front bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col justify-center text-center">

                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>

                      <div className="w-10 h-1 bg-orange-500 mx-auto mb-3"></div>

                      <p className="text-gray-600 text-sm sm:text-base">
                        {service.description}
                      </p>

                    </div>

                    {/* Back */}
                    <div className="flip-card-back bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center text-center">

                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base mb-5">
                        {service.description}
                      </p>

                      <button
                        onClick={handleclick}
                        className="px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition"
                      >
                        Read More
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* Styles */}
      <style>
        {`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 320px;
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }

        /* Hover flip for desktop */
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        /* Tap flip for mobile */
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 16px;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
        `}
      </style>

    </section>
  );
};

export default VisionMission;
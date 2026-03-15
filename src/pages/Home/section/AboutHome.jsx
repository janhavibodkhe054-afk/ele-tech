import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Zap, Settings, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutHome() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">  {/* FIX ADDED HERE */}

      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full" data-aos="fade-right">

            <div className="hidden sm:block absolute -top-10 -left-10 w-32 h-32 bg-orange-500 rounded-tr-[80px] rounded-bl-[80px]" />

            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/imageabout.webp"
                alt="Electrical Engineering"
                className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[520px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="absolute left-4 sm:left-0 top-10 sm:top-24 bg-orange-500 text-white w-28 sm:w-36 text-center px-4 py-5 sm:py-6 rounded-xl shadow-lg z-20">
              <div className="flex justify-center mb-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white text-orange-500 flex items-center justify-center rounded-full">
                  <Zap size={20} />
                </div>
              </div>
              <p className="text-sm sm:text-base font-bold">10 Years Of</p>
              <p className="text-[11px] sm:text-xs opacity-90">Quality Service</p>
            </div>

            <div className="hidden sm:block absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500 rounded-tr-[100px]" />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="text-orange-500" size={18} />
              <p className="text-orange-500 uppercase tracking-[3px] font-semibold text-sm">
                About Us
              </p>
            </div>

            <div className="w-16 h-[2px] bg-orange-500 mb-5"></div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Ele Tech Provide
              <br />
              <span className="text-orange-500">Quality Service</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              At Ele Tech Engineering we deliver advanced electrical and
              mechanical solutions designed for reliability and performance.
              Our expert team ensures every project meets the highest standards
              of quality, safety, and efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 sm:mt-10">

              <div className="flex gap-3">
                <div className="text-orange-500">
                  <Zap size={30} />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">Electrical</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Complete electrical infrastructure and power solutions
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-orange-500">
                  <Settings size={30} />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">Mechanical</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Expert mechanical engineering and industrial systems
                  </p>
                </div>
              </div>

            </div>

            <div className="border-t my-6 sm:my-8"></div>

            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">

              <li className="flex gap-2 items-start">
                <span className="text-orange-500 text-lg">✓</span>
                Building innovative engineering solutions for industries
              </li>

              <li className="flex gap-2 items-start">
                <span className="text-orange-500 text-lg">✓</span>
                Delivering projects with precision and professionalism
              </li>

              <li className="flex gap-2 items-start">
                <span className="text-orange-500 text-lg">✓</span>
                Empowering our team and partners for long-term success
              </li>

            </ul>

            <button
              onClick={() => navigate("/about")}
              className="mt-6 sm:mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition hover:shadow-lg text-sm sm:text-base"
            >
              READ MORE →
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Zap, Settings, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutHome() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section className="py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative" data-aos="fade-right">

          {/* Decorative Shape Top */}
          <div className="absolute -top-10 -left-10 w-36 h-36 bg-orange-500 rounded-tr-[80px] rounded-bl-[80px]" />

          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://detricaelectromechanical.com/assets/img/about/Electricalcontractor-noida.jpg"
              alt="Electrical Engineering"
              className="w-full h-[580px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute left-0 top-32 bg-orange-500 text-white w-40 text-center px-6 py-8 rounded-xl shadow-lg z-20">

            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-white text-orange-500 flex items-center justify-center rounded-full">
                <Zap size={22} />
              </div>
            </div>

            <p className="text-lg font-bold">10 Years Of</p>
            <p className="text-sm opacity-90">Quality Service</p>
          </div>

          {/* Decorative Bottom Shape */}
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-orange-500 rounded-tr-[100px]" />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div data-aos="fade-left">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-4">
  
  <Lightbulb className="text-orange-500" size={20} />

  <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
    About Us
  </p>

</div>

<div className="w-20 h-[2px] bg-orange-500 mb-6"></div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Ele Tech Provide
            <br />
            <span className="text-orange-500">Quality Service</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            At Ele Tech Engineering we deliver advanced electrical and
            mechanical solutions designed for reliability and performance.
            Our expert team ensures every project meets the highest standards
            of quality, safety, and efficiency.
          </p>

          {/* ================= SERVICES ================= */}
          <div className="grid sm:grid-cols-2 gap-8 mt-10">

            {/* Electrical */}
            <div className="flex gap-4">
              <div className="text-orange-500">
                <Zap size={36} />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Electrical</h4>
                <p className="text-gray-600 text-sm">
                  Complete electrical infrastructure and power solutions
                </p>
              </div>
            </div>

            {/* Mechanical */}
            <div className="flex gap-4">
              <div className="text-orange-500">
                <Settings size={36} />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Mechanical</h4>
                <p className="text-gray-600 text-sm">
                  Expert mechanical engineering and industrial systems
                </p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t my-8" />

          {/* ================= BULLET POINTS ================= */}
          <ul className="space-y-4 text-gray-700">

            <li className="flex gap-3">
              <span className="text-orange-500 text-lg">✓</span>
              Building innovative engineering solutions for industries
            </li>

            <li className="flex gap-3">
              <span className="text-orange-500 text-lg">✓</span>
              Delivering projects with precision and professionalism
            </li>

            <li className="flex gap-3">
              <span className="text-orange-500 text-lg">✓</span>
              Empowering our team and partners for long-term success
            </li>

          </ul>

          {/* Button */}
          <button 
          onClick={() => navigate("/about")}
          className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition hover:shadow-lg">
            READ MORE →
          </button>

        </div>
      </div>
    </section>
  );
}
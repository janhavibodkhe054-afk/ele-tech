import React from "react";
import { Link } from "react-router-dom";

const BuildingManagement = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center">

        <img
          src="/build1.png"
          alt="Building Management System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Building Management System
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Building Management System
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2">

            {/* Main Image */}
            <img
              src="/build2.jpg"
              alt="Building Automation System"
              className="rounded-lg mb-6 w-full h-[250px] md:h-[400px] object-cover"
            />

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Building Management System
            </h2>

            {/* Content */}
            <p className="text-gray-600 leading-relaxed mb-4">
              A Building Management System (BMS) is an advanced automation
              system used to monitor and control various mechanical,
              electrical, and safety systems within a building. It integrates
              components such as HVAC systems, lighting, fire safety, power
              systems, and security systems into a centralized platform for
              efficient building operations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              By using smart sensors, controllers, and software interfaces,
              a BMS allows facility managers to monitor building performance,
              control energy usage, and respond quickly to system alerts or
              faults. This improves operational efficiency while reducing
              energy consumption and maintenance costs.
            </p>

            

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div>
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg">

              <h3 className="text-lg md:text-xl font-bold mb-6 border-b pb-3">
                Mechanical Services
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm md:text-base">

                <li>
                  <Link to="/fire-fighting-system" className="hover:text-orange-500">
                    ▸ Fire Fighting System
                  </Link>
                </li>

                <li>
                  <Link to="/fire-hydrant-system" className="hover:text-orange-500">
                    ▸ Fire Hydrant System
                  </Link>
                </li>

                <li>
                  <Link to="/fire-suppression-system" className="hover:text-orange-500">
                    ▸ Fire Suppression System
                  </Link>
                </li>

                <li>
                  <Link to="/industrial-exhaust-system" className="hover:text-orange-500">
                    ▸ Industrial Exhaust System
                  </Link>
                </li>

                <li>
                  <Link to="/heating-cooling-system" className="hover:text-orange-500">
                    ▸ Heating & Cooling System
                  </Link>
                </li>

                <li>
                  <Link to="/building-management-system" className="hover:text-orange-500">
                    ▸ Building Management System
                  </Link>
                </li>

              </ul>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default BuildingManagement;
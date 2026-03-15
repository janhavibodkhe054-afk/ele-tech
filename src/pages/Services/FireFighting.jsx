import React from "react";
import { Link } from "react-router-dom";

const FireFighting = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center">

        <img
          src="/firefight1.png"
          alt="Fire Fighting System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Fire Fighting System
          </h1>

          <p className="text-sm md:text-base">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Fire Fighting System
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
              src="/firefight2.avif"
              alt="Fire Safety System"
              className="rounded-lg mb-6 w-full h-[250px] md:h-[400px] object-cover"
            />

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Fire Fighting System
            </h2>

            {/* Content */}
            <p className="text-gray-600 leading-relaxed mb-4">
              Fire fighting systems are essential safety solutions designed to
              detect, control, and extinguish fires in residential, commercial,
              and industrial buildings. These systems help minimize property
              damage and protect human life by responding quickly during fire
              emergencies.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our fire protection solutions include installation of fire pumps,
              sprinkler systems, fire extinguishers, pipelines, and advanced
              detection systems. We ensure that every system meets safety
              standards and provides reliable performance during emergencies.
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

export default FireFighting;
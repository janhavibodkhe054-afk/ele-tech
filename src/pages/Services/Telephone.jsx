import React from "react";
import { Link } from "react-router-dom";

const Telephone = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/phone1.webp"
          alt="Telephone Data System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Telephone / Data System
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Telephone / Data System
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/phone2.jpg"
              alt="Telephone Data Cabling"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Telephone & Data Communication Systems
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Telephone and data systems are essential components of modern
              residential, commercial, and industrial buildings. These
              systems enable seamless communication through voice calls,
              internet connectivity, and digital data transfer. Proper
              installation of telephone and data networks ensures reliable
              communication, faster connectivity, and efficient information
              sharing within an organization or home environment.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Professional installation involves structured cabling
              systems, network racks, switches, routers, and data outlets.
              High-quality cables such as Cat6, Cat6A, or fiber optic
              cables are used to provide stable internet and communication
              connections. Structured data cabling allows easy management
              of network infrastructure and supports future upgrades as
              technology evolves.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Reliable Network & Communication Infrastructure
            </h3>

           

            <p className="text-gray-600 leading-relaxed mb-6">
              Telephone and data systems include structured cabling,
              network switches, patch panels, communication racks, and
              internet distribution points. These systems are designed to
              support multiple devices such as computers, IP phones,
              printers, and security systems while maintaining high-speed
              connectivity and minimal signal loss.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In modern offices and smart homes, data systems also support
              integrated technologies such as CCTV surveillance, smart
              automation systems, and cloud-based communication platforms.
              Properly designed infrastructure ensures smooth operation of
              these technologies while maintaining secure and reliable
              communication networks.
            </p>

            <p className="text-gray-600 leading-relaxed">
              A professionally installed telephone and data system
              improves communication efficiency, enhances productivity,
              and ensures stable internet connectivity for daily
              operations. With the right infrastructure in place,
              businesses and homeowners can easily expand their network
              capacity as their technology requirements grow.
            </p>

          </div>

          {/* SIDEBAR */}
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">

              <h3 className="text-xl font-bold mb-6 border-b pb-3">
                Electrical Systems
              </h3>

              <ul className="space-y-4 text-gray-700">

                <li>
                  <Link to="/home-automation" className="hover:text-orange-500">
                    ▸ Home Automation
                  </Link>
                </li>

                <li>
                  <Link to="/telephone-data-system" className="hover:text-orange-500">
                    ▸ Telephone / Data System
                  </Link>
                </li>

                <li>
                  <Link to="/public-address-system" className="hover:text-orange-500">
                    ▸ Public Address System
                  </Link>
                </li>

                <li>
                  <Link to="/fire-alarm-system" className="hover:text-orange-500">
                    ▸ Fire Alarm System
                  </Link>
                </li>

                <li>
                  <Link to="/security-system" className="hover:text-orange-500">
                    ▸ Security System
                  </Link>
                </li>

                <li>
                  <Link to="/cctv-system" className="hover:text-orange-500">
                    ▸ CCTV System
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

export default Telephone;
import React from "react";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/security1.jpg"
          alt="Security System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Security System
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Security System
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/security2.jpg"
              alt="Security System Installation"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Advanced Security System Solutions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Security systems are essential for protecting homes,
              offices, commercial buildings, and industrial facilities.
              These systems are designed to monitor, detect, and prevent
              unauthorized access or suspicious activities. Modern
              security systems combine multiple technologies such as
              motion sensors, alarms, access control systems, and
              surveillance devices to ensure maximum safety.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A well-designed security system includes intrusion
              detection devices, control panels, alarm systems, and
              monitoring software. These systems can automatically
              trigger alerts when unauthorized entry is detected,
              helping property owners respond quickly to potential
              threats and maintain a secure environment.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Reliable Protection & Smart Monitoring
            </h3>

            

            <p className="text-gray-600 leading-relaxed mb-6">
              Modern security systems can be integrated with smart
              technology that allows users to monitor and control
              security devices remotely using smartphones or computers.
              Motion detection, door sensors, alarm notifications,
              and remote access features help provide real-time
              security updates and improved control over the system.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Security systems can also be integrated with other
              building technologies such as CCTV cameras, fire alarm
              systems, and home automation platforms. This integration
              creates a complete security infrastructure that improves
              both safety and operational efficiency.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Professional installation ensures proper placement of
              sensors, cameras, and alarm devices to achieve maximum
              coverage and effectiveness. A reliable security system
              helps prevent theft, protect valuable assets, and provide
              peace of mind for homeowners and business owners.
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

export default Security;
import React from "react";
import { Link } from "react-router-dom";

const Cctv = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/cctv1.webp"
          alt="CCTV System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            CCTV System
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; CCTV System
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/cctv2.jpg"
              alt="CCTV Camera Installation"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              CCTV Surveillance System Installation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              CCTV (Closed-Circuit Television) systems are widely used
              for monitoring and surveillance in homes, offices,
              commercial buildings, and industrial facilities. These
              systems help enhance security by providing real-time
              video monitoring and recording activities within a
              property. CCTV cameras act as a powerful deterrent
              against theft, vandalism, and unauthorized access.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A typical CCTV system consists of surveillance cameras,
              digital video recorders (DVR) or network video recorders
              (NVR), monitors, and storage devices. Cameras capture
              video footage and transmit it to the recording system
              where it can be viewed live or stored for future
              reference. Modern CCTV systems also support remote
              monitoring through smartphones, tablets, and computers.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Smart Surveillance & 24/7 Monitoring
            </h3>

            

            <p className="text-gray-600 leading-relaxed mb-6">
              Modern CCTV systems use high-definition cameras, night
              vision technology, motion detection sensors, and smart
              analytics to improve security monitoring. These features
              allow property owners to detect suspicious activities
              quickly and take immediate action when needed.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              CCTV systems can also be integrated with other security
              solutions such as alarm systems, access control systems,
              and home automation technologies. This integration
              creates a comprehensive security network that improves
              safety and operational efficiency.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Professional CCTV installation ensures proper camera
              placement, optimal coverage, and reliable system
              performance. With advanced monitoring capabilities,
              CCTV surveillance systems provide peace of mind by
              protecting people, property, and valuable assets
              around the clock.
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

export default Cctv;
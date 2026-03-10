import React from "react";
import { Link } from "react-router-dom";

const FireAlarm = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/fire1.jpg"
          alt="Fire Alarm System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Fire Alarm System
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Fire Alarm System
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/fire2.jpg"
              alt="Fire Alarm Installation"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Advanced Fire Alarm System Installation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A fire alarm system is a crucial safety solution designed
              to detect fire hazards and alert occupants of a building
              in case of an emergency. These systems use smoke detectors,
              heat sensors, and alarm devices to quickly identify
              potential fire threats and trigger warning signals.
              Fire alarm systems are widely used in residential
              buildings, offices, factories, hospitals, shopping malls,
              and public facilities to ensure maximum safety.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A typical fire alarm system includes smoke detectors,
              heat detectors, manual call points, alarm bells, control
              panels, and notification devices. When smoke or excessive
              heat is detected, the system activates alarms that notify
              occupants to evacuate the building immediately and alert
              emergency services if necessary.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Reliable Fire Detection & Safety Protection
            </h3>

           

            <p className="text-gray-600 leading-relaxed mb-6">
              Modern fire alarm systems are designed with advanced
              technologies that provide faster detection and improved
              reliability. Addressable fire alarm systems can identify
              the exact location of a fire, allowing emergency teams
              to respond quickly and effectively.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Fire alarm systems can also be integrated with other
              safety systems such as public address systems, emergency
              lighting, and building management systems. This integration
              allows automatic evacuation announcements and coordinated
              emergency responses during fire incidents.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Professional installation and regular maintenance of fire
              alarm systems ensure reliable performance and compliance
              with safety regulations. A well-designed fire detection
              system helps protect lives, property, and critical
              infrastructure by providing early warnings and efficient
              emergency communication.
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

export default FireAlarm;
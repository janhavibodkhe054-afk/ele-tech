import React from "react";
import { Link } from "react-router-dom";

const HomeAutomation = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/automation1.jpg"
          alt="Home Automation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Home Automation
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Home Automation
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/automation2.webp"
              alt="Smart Home Automation"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Smart Home Automation Solutions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Home automation is a modern technology that allows homeowners
              to control various electrical systems and devices in their
              homes automatically or remotely. With smart automation systems,
              users can manage lighting, security systems, air conditioning,
              entertainment devices, and other electrical appliances through
              mobile apps, voice assistants, or centralized control panels.
              These systems provide convenience, energy efficiency, and
              improved security for residential environments.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A professionally designed home automation system integrates
              different electrical components into a single smart network.
              Homeowners can schedule lighting, monitor security cameras,
              control door locks, and adjust room temperature from anywhere.
              Smart homes are becoming increasingly popular as they offer
              enhanced comfort, safety, and efficient energy usage.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Intelligent Control & Smart Living
            </h3>

            

            <p className="text-gray-600 leading-relaxed mb-6">
              Home automation systems can include smart lighting control,
              automated curtains, smart door locks, motion sensors, and
              intelligent climate control systems. These technologies allow
              homeowners to create automated schedules that improve energy
              efficiency while reducing electricity consumption.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In addition to convenience, automation systems improve safety
              by integrating with CCTV cameras, fire alarm systems, and
              security monitoring devices. Alerts and notifications can be
              sent directly to a homeowner's smartphone in case of unusual
              activity, fire detection, or system faults.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With the advancement of smart technology, home automation has
              become an essential part of modern residential design.
              Professional installation ensures reliable connectivity,
              seamless device integration, and user-friendly control systems
              that enhance everyday living experiences.
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

export default HomeAutomation;
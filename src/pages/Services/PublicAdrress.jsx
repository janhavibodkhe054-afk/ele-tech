import React from "react";
import { Link } from "react-router-dom";

const PublicAdrress = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <img
          src="/public2.webp"
          alt="Public Address System"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Public Address System
          </h1>

          <p className="text-sm md:text-lg">
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>{" "}
            &gt;&gt; Public Address System
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <img
              src="/public1.jpg"
              alt="Public Address System Installation"
              className="w-full rounded-lg mb-8 h-[450px]"
            />

            <h2 className="text-3xl font-bold mb-5">
              Professional Public Address System Solutions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              A Public Address (PA) system is an electronic sound
              amplification and distribution system designed to deliver
              clear audio communication to a large group of people.
              These systems are commonly used in offices, schools,
              factories, shopping malls, railway stations, airports,
              and large public venues to make announcements and
              broadcast important information.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A typical public address system includes microphones,
              amplifiers, speakers, mixers, and control equipment.
              The system captures audio from microphones or audio
              devices, amplifies the signal, and distributes the sound
              through strategically placed speakers to ensure clear
              communication across large areas.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Reliable Communication for Large Spaces
            </h3>

           

            <p className="text-gray-600 leading-relaxed mb-6">
              Modern PA systems are designed with advanced audio
              technologies that ensure clear sound distribution and
              minimal distortion. These systems can be integrated with
              emergency alarms, background music systems, and digital
              communication networks for enhanced functionality.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Public address systems are essential in emergency
              situations where quick communication is required.
              Integration with fire alarm systems allows emergency
              messages to be broadcast automatically, helping guide
              people safely during evacuations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Professional installation ensures optimal speaker
              placement, proper sound coverage, and reliable system
              performance. A well-designed public address system
              improves communication efficiency and enhances safety
              in public and commercial environments.
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

export default PublicAdrress;
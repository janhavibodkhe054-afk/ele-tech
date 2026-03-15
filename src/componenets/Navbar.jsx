import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Our Client", path: "/client" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const services = {
    mechanical: [
      { name: "Fire Fighting System", link: "/fire-fighting-system" },
      { name: "Fire Hydrant System", link: "/fire-hydrant-system" },
      { name: "Fire Suppression System", link: "/fire-suppression-system" },
      { name: "Industrial Exhaust System", link: "/industrial-exhaust-system" },
      { name: "Heating & Cooling System", link: "/heating-cooling-system" },
      {
        name: "Building Management System",
        link: "/building-management-system",
      },
    ],

    general: [
      {
        name: "Commercial Electrical Installation",
        link: "/commercial-electrical-installation",
      },
      {
        name: "Industrial Electrical Installation",
        link: "/industrial-electrical-installation",
      },
      {
        name: "Farmhouse Electrical Installation",
        link: "/farmhouse-electrical-installation",
      },
      {
        name: "Electrical Turnkey Projects",
        link: "/electrical-turnkey-projects",
      },
      { name: "HT-LT Cable Laying", link: "/ht-lt-cable-laying" },
      { name: "Solar System Installation", link: "/solar-system-installation" },
      { name: "Lighting Contractors", link: "/lighting-contractors" },
      {
        name: "Commercial Electrical Works",
        link: "/commercial-electrical-works",
      },
      {
        name: "Residential Electrical Work",
        link: "/residential-electrical-work",
      },
    ],

    electrical: [
      { name: "Home Automation", link: "/home-automation" },
      { name: "Telephone / Data system", link: "/telephone-data-system" },
      { name: "Public address system", link: "/public-address-system" },
      { name: "Fire alarm system", link: "/fire-alarm-system" },
      { name: "Security system", link: "/security-system" },
      { name: "CCTV system", link: "/cctv-system" },
    ],

    plumbing: [
      { name: "STP", link: "/stp" },
      { name: "Rain Water system", link: "/rain-water-system" },
      { name: "Domestic water supply", link: "/domestic-water-supply" },
      { name: "Drainage systems", link: "/drainage-systems" },
      {
        name: "Installation of sanitary fixtures",
        link: "/sanitary-fixtures-installation",
      },
    ],
  };

  const toggleServices = () => {
    setServiceOpen(!serviceOpen);
  };

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        {/* ===== Top Header ===== */}
        <div className="hidden md:flex justify-between items-center px-6 lg:px-10 py-2 bg-blue-900 text-white text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Pune, Maharashtra, India</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+919423444184">+91 9423444184</a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:info@ele-tech.com">info@ele-tech.com</a>
          </div>
        </div>
        {/* ===== Navbar ===== */}
        <nav className="w-full bg-white shadow-md">
          <div className="flex items-center justify-between py-4 px-4 md:px-10">
            {/* Logo */}
            <Link to="/">
              <img src="/logo.jpeg" className="h-12 sm:h-14" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10 font-medium">
              {navLinks.slice(0, 2).map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className={
                      location.pathname === link.path
                        ? "text-orange-500 font-semibold"
                        : "text-gray-700 hover:text-orange-500"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Services Desktop */}
              <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer">
                  Services
                  <ChevronDown size={16} />
                </div>

                <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                  <div className="bg-white shadow-xl rounded-lg w-64 py-3">
                    {/* Mechanical */}
                    <div className="relative group/sub">
                      <div className="flex justify-between px-4 py-2 hover:bg-gray-100">
                        Mechanical
                        <ChevronRight size={16} />
                      </div>

                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-lg w-72 py-3">
                        {services.mechanical.map((item, i) => (
                          <Link
                            key={i}
                            to={item.link}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* General Electrical */}
                    <div className="relative group/sub">
                      <div className="flex justify-between px-4 py-2 hover:bg-gray-100">
                        General Electrical
                        <ChevronRight size={16} />
                      </div>

                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-lg w-72 py-3">
                        {services.general.map((item, i) => (
                          <Link
                            key={i}
                            to={item.link}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Electrical */}
                    <div className="relative group/sub">
                      <div className="flex justify-between px-4 py-2 hover:bg-gray-100">
                        Electrical
                        <ChevronRight size={16} />
                      </div>

                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-lg w-72 py-3">
                        {services.electrical.map((item, i) => (
                          <Link
                            key={i}
                            to={item.link}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Plumbing */}
                    <div className="relative group/sub">
                      <div className="flex justify-between px-4 py-2 hover:bg-gray-100">
                        Plumbing
                        <ChevronRight size={16} />
                      </div>

                      <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-xl rounded-lg w-72 py-3">
                        {services.plumbing.map((item, i) => (
                          <Link
                            key={i}
                            to={item.link}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {navLinks.slice(2).map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className={
                      location.pathname === link.path
                        ? "text-orange-500 font-semibold"
                        : "text-gray-700 hover:text-orange-500"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-2 rounded-full text-white
            bg-gradient-to-r from-blue-900 to-orange-500"
              >
                Enquire Now
              </Link>

              <a
                href="https://wa.me/919423444184"
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-500 text-white"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* ===== MOBILE MENU ===== */}

          {isOpen && (
            <div className="md:hidden bg-white px-6 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block ${
                  location.pathname === "/"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block ${
                  location.pathname === "/about"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                About
              </Link>

              {/* SERVICES */}

              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full font-semibold text-gray-700"
                >
                  Services
                  <ChevronDown size={18} />
                </button>

                {serviceOpen && (
                  <div className="mt-3 space-y-3">
                    {/* MECHANICAL */}
                    <div>
                      <button
                        onClick={() => toggleCategory("mechanical")}
                        className="flex justify-between w-full text-gray-700"
                      >
                        Mechanical
                        <ChevronDown size={16} />
                      </button>

                      {openCategory === "mechanical" && (
                        <div className="pl-4 mt-2 space-y-2">
                          {services.mechanical.map((item, i) => (
                            <Link
                              key={i}
                              to={item.link}
                              onClick={() => setIsOpen(false)}
                              className={`block text-sm ${
                                location.pathname === item.link
                                  ? "text-orange-500 font-semibold"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* GENERAL ELECTRICAL */}
                    <div>
                      <button
                        onClick={() => toggleCategory("general")}
                        className="flex justify-between w-full text-gray-700"
                      >
                        General Electrical
                        <ChevronDown size={16} />
                      </button>

                      {openCategory === "general" && (
                        <div className="pl-4 mt-2 space-y-2">
                          {services.general.map((item, i) => (
                            <Link
                              key={i}
                              to={item.link}
                              onClick={() => setIsOpen(false)}
                              className={`block text-sm ${
                                location.pathname === item.link
                                  ? "text-orange-500 font-semibold"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* ELECTRICAL */}
                    <div>
                      <button
                        onClick={() => toggleCategory("electrical")}
                        className="flex justify-between w-full text-gray-700"
                      >
                        Electrical
                        <ChevronDown size={16} />
                      </button>

                      {openCategory === "electrical" && (
                        <div className="pl-4 mt-2 space-y-2">
                          {services.electrical.map((item, i) => (
                            <Link
                              key={i}
                              to={item.link}
                              onClick={() => setIsOpen(false)}
                              className={`block text-sm ${
                                location.pathname === item.link
                                  ? "text-orange-500 font-semibold"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* PLUMBING */}
                    <div>
                      <button
                        onClick={() => toggleCategory("plumbing")}
                        className="flex justify-between w-full text-gray-700"
                      >
                        Plumbing
                        <ChevronDown size={16} />
                      </button>

                      {openCategory === "plumbing" && (
                        <div className="pl-4 mt-2 space-y-2">
                          {services.plumbing.map((item, i) => (
                            <Link
                              key={i}
                              to={item.link}
                              onClick={() => setIsOpen(false)}
                              className={`block text-sm ${
                                location.pathname === item.link
                                  ? "text-orange-500 font-semibold"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/industries"
                onClick={() => setIsOpen(false)}
                className={`block ${
                  location.pathname === "/industries"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Industries
              </Link>

              <Link
                to="/client"
                onClick={() => setIsOpen(false)}
                className={`block ${
                  location.pathname === "/client"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Our Client
              </Link>

              <Link
                to="/career"
                onClick={() => setIsOpen(false)}
                className={`block ${
                  location.pathname === "/career"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Career
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block ${
                  location.pathname === "/contact"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Contact
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

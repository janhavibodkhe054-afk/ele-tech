import React from "react";

const Customers = () => {
  const customers = [
    { id: 1, logo: "/Picture1.png" },
    { id: 2, logo: "/Picture2.png" },
    { id: 3, logo: "/Picture3.png" },
    { id: 4, logo: "/Picture4.jpg" },
    { id: 5, logo: "/Picture5.png" },
    { id: 6, logo: "/Picture6.jpg" },
    { id: 7, logo: "/Picture7.png" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">

        {/* HEADING */}
        <p className="uppercase tracking-[3px] sm:tracking-[4px] text-orange-500 font-semibold mb-2 text-xs sm:text-sm">
          Our Clients
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
          Trusted Electro Mechanical & Industrial Clients
        </h2>

        <div className="w-12 sm:w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          Delivering reliable electro mechanical, industrial electrical,
          and mechanical solutions to leading organizations.
        </p>

        {/* CLIENT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 mt-10 sm:mt-14">

          {customers.map((client, index) => (
            <div
              key={client.id}
              className="animate-[cardReveal_0.8s_ease-out]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <LogoCard logo={client.logo} />
            </div>
          ))}

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes cardReveal {
            from { opacity: 0; transform: translateY(50px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes floatCard {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
        `}
      </style>

    </section>
  );
};

const LogoCard = ({ logo }) => (
  <div
    className="
      h-20 sm:h-24 md:h-28 lg:h-32
      rounded-xl border border-gray-100
      shadow-md hover:shadow-xl
      transition duration-500
      flex items-center justify-center
      bg-white p-3 sm:p-4
      hover:-translate-y-1
      animate-[floatCard_4s_ease-in-out_infinite]
    "
  >
    <img
      src={logo}
      alt="client"
      className="
        max-h-10 sm:max-h-12 md:max-h-16 lg:max-h-18
        w-auto object-contain
      "
    />
  </div>
);

export default Customers;
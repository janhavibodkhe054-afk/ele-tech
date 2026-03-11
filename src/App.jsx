import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./componenets/ScrollToTop";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Career from "./pages/Career/Career";
import Services from "./pages/Services/Services";
import Industries from "./pages/Industries/Industries";
import Client from "./pages/Client/Client";
import Contact from "./pages/Contact/Contact";
import MechanicalUtilityPiping from "./pages/Services/MechanicalUtilityPiping";
import AssemblyLineInstallation from "./pages/Services/AssemblyLineInstallation";
import ElectricalITInfrastructure from "./pages/Services/ElectricalITInfrastructure";
import SpareParts from "./pages/Services/SpareParts";
import Commercial from "./pages/Services/Commercial";
import Industrial from "./pages/Services/Industrial";
import Farmhouse from "./pages/Services/Farmhouse";
import ElectricalTurnkey from "./pages/Services/ElectricalTurnkey";
import Htlt from "./pages/Services/Htlt";
import Solar from "./pages/Services/Solar";
import Lighting from "./pages/Services/Lighting";
import CommercialWork from "./pages/Services/CommercialWork";
import Residential from "./pages/Services/Residential";
import HomeAutomation from "./pages/Services/HomeAutomation";
import Telephone from "./pages/Services/Telephone";
import PublicAdrress from "./pages/Services/PublicAdrress";
import FireAlarm from "./pages/Services/FireAlarm";
import Avvv from "./pages/Services/Avvv";
import Security from "./pages/Services/Security";
import Cctv from "./pages/Services/Cctv";
import Stp from "./pages/Services/Stp";
import RainWater from "./pages/Services/RainWater";
import Domestic from "./pages/Services/Domestic";
import Drainage from "./pages/Services/Drainage";
import Sanitary from "./pages/Services/Sanitary";
import FloatingContact from "./componenets/FloatingContact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // animation runs only once
      easing: "ease-in-out",
      offset: 80, // start animation earlier
    });
  }, []);

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/client" element={<Client />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/services/mechanical-utility-piping"
          element={<MechanicalUtilityPiping />}
        />
        <Route
          path="/services/assembly-line-installation"
          element={<AssemblyLineInstallation />}
        />
        <Route
          path="/services/electrical-it-infrastructure"
          element={<ElectricalITInfrastructure />}
        />
        <Route
          path="/services/spare-parts-procurement"
          element={<SpareParts />}
        />

        <Route
          path="/commercial-electrical-installation"
          element={<Commercial />}
        />
        <Route
          path="/industrial-electrical-installation"
          element={<Industrial />}
        />
        <Route
          path="/farmhouse-electrical-installation"
          element={<Farmhouse />}
        />
        <Route
          path="/electrical-turnkey-projects"
          element={<ElectricalTurnkey />}
        />
        <Route path="/ht-lt-cable-laying" element={<Htlt />} />
        <Route path="/solar-system-installation" element={<Solar />} />
        <Route path="/lighting-contractors" element={<Lighting />} />
        <Route
          path="/commercial-electrical-works"
          element={<CommercialWork />}
        />
        <Route path="/residential-electrical-work" element={<Residential />} />

        <Route path="/home-automation" element={<HomeAutomation />} />
        <Route path="/telephone-data-system" element={<Telephone />} />
        <Route path="/public-address-system" element={<PublicAdrress />} />
        <Route path="/fire-alarm-system" element={<FireAlarm />} />

        <Route path="/security-system" element={<Security />} />
        <Route path="/cctv-system" element={<Cctv />} />

        <Route path="/stp" element={<Stp />} />
        <Route path="/rain-water-system" element={<RainWater />} />
        <Route path="/domestic-water-supply" element={<Domestic />} />
        <Route path="/drainage-systems" element={<Drainage />} />
        <Route path="/sanitary-fixtures-installation" element={<Sanitary />} />
      </Routes>
<FloatingContact />
      <Footer />
    </Router>
  );
}

export default App;

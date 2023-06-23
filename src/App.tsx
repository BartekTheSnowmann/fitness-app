import React, { useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Benefits from "./components/benefits/Benefits";
import OurClasses from "./components/classes/OurClasses";
import ContactUs from "./components/contact/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

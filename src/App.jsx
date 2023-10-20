
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Logo from "./Assests/dsc_logo.bd954cee.png";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Speakers from "./components/Speakers/Speakers";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Team from "./components/Team/Team";

function App() {

  return (
    <div className="w-[100vw] h-auto box-border overflow-x-hidden">
      <NavBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

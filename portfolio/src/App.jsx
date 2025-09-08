import React from "react";
import Navber from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Background from "./Components/Background";

export default function App() {
  return (
    <div>
      <Background />
      <Navber />
      <Home />
      <Footer />
    </div>
  );
}

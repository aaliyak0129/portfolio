import React from "react";
import Navber from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Background from "./Components/Background";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <div>
      <Background />
      <Navber />
      <Home />
      <Footer />
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

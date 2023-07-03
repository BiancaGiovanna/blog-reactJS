import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

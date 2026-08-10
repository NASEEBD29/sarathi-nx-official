import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import TopHeader from "./components/layout/TopHeader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingContact from "./components/common/FloatingContact";

function App() {
  return (
    <BrowserRouter basename="/sarathi-nx-official">

      <TopHeader />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

      </Routes>

      <Footer />

      <FloatingContact />

    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Exhibitions from "./pages/Exhibitions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Hotel from "./pages/Hotel";
import Visa from "./pages/Visa";
import Holiday from "./pages/Holiday";

import TopHeader from "./components/layout/TopHeader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingContact from "./components/common/FloatingContact";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import ScrollToTop from "./components/common/ScrollToTop";

import BusinessCorporateTravel from "./pages/BusinessCorporateTravel";
import MICEExhibitionTravel from "./pages/MICEExhibitionTravel";
import TravelInsurance from "./pages/TravelInsurance";
import TransferCarRental from "./pages/TransferCarRental";
import CruiseFerryBooking from "./pages/CruiseFerryBooking";
import GroupCustomizedTours from "./pages/GroupCustomizedTours";

function App() {
  return (
    <BrowserRouter basename="/sarathi-nx-official">
      <ScrollToTop />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <TopHeader />

      <Navbar />

      {/* =====================================================
          ROUTES
      ===================================================== */}

      <Routes>
        {/* ===================================================
            HOME
        =================================================== */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ===================================================
            NEW NAVBAR ROUTES
        =================================================== */}

        <Route
          path="/flight-air-travel"
          element={<Services />}
        />

        <Route
          path="/hotel-accommodation"
          element={<Hotel />}
        />

        <Route
          path="/visa-documentation"
          element={<Visa />}
        />

        <Route
          path="/trade-fair"
          element={<Exhibitions />}
        />

        <Route
          path="/premium-holiday-packages"
          element={<Holiday />}
        />

        <Route
          path="/about-us"
          element={<About />}
        />

        <Route
          path="/contact-us"
          element={<Contact />}
        />
        {/* <Route
          path="/business-corporate-travel"
          element={<BusinessCorporateTravel />} 
        /> */}
          <Route path="/business-corporate-travel" element={<BusinessCorporateTravel />} />
<Route path="/mice-exhibition-travel" element={<MICEExhibitionTravel />} />
<Route path="/travel-insurance" element={<TravelInsurance />} />
<Route path="/transfer-car-rental" element={<TransferCarRental />} />
<Route path="/cruise-ferry-booking" element={<CruiseFerryBooking />} />
<Route path="/group-customized-tours" element={<GroupCustomizedTours />} />
        {/* ===================================================
            OLD ROUTES
            Existing links/bookmarks won't break
        =================================================== */}

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/exhibitions"
          element={<Exhibitions />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ===================================================
            ADMIN LOGIN
        =================================================== */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* ===================================================
            PROTECTED ADMIN DASHBOARD
        =================================================== */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* ===================================================
            FALLBACK
            Unknown URL -> Home
        =================================================== */}

        <Route
          path="*"
          element={<Home />}
        />
      </Routes>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      {/* =====================================================
          FLOATING CONTACT
      ===================================================== */}

      <FloatingContact />
    </BrowserRouter>
  );
}

export default App;
import TopHeader from "../components/layout/TopHeader";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
// import TrustedCompanies from "../components/home/TrustedCompanies";
import About from "../components/home/About";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import StatsSection from "../components/home/StatsSection";
import UpcomingExhibitions from "../components/home/UpcomingExhibitions";
import Industries from "../components/home/Industries";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Hero />
      {/* <TrustedCompanies /> */}
      <About />
      <Services/>
      <WhyChooseUs/>
      <StatsSection />
      <UpcomingExhibitions/>
      <Industries/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </>
  );
}
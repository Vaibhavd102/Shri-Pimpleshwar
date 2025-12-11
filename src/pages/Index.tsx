// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
// import DarshanSection from "@/components/DarshanSection";
// import EventsSection from "@/components/EventsSection";
// import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";

// const Index = () => {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <HeroSection />
//       <AboutSection />
//       <DarshanSection />
//       <EventsSection />
//       <ContactSection />
//       <Footer />
//     </main>
//   );
// };

// export default Index;
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DarshanSection from "@/components/DarshanSection";
// import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DarshanSection />
      {/* <GallerySection /> */}
      <EventsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

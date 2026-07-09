import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import GymGallerySection from "./GymGallerySection";
import OperatingHoursSection from "./OperatingHoursSection";
import MembershipSection from "./MembershipSection";
import FAQSection from "./FAQSection";
import LocationsSection from "./LocationSection";
import TrianSection from "./TrianSection";

import Line from "../../components/ui/Line";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="bg-main px-6 py-16 md:px-12 lg:px-20">
        <AboutSection />
        <Line />
        <GymGallerySection />
        <Line />
        <OperatingHoursSection />
        <Line />
        <MembershipSection />
        <Line />
        <FAQSection />
        <Line />
        <LocationsSection />
        <Line />
        <TrianSection />
      </div>
    </>
  );
}

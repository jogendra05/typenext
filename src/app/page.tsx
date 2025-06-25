import FeaturedCoureses from "@/components/FeaturedCoureses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructor";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-auto scrollbar-hide">
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCoureses/>
        <WhyChooseUs/>
        <MusicSchoolTestimonial/>
        <UpcomingWebinars/>
        <Instructors/>
        <Footer/>
      </main>
    </div>
  );
}

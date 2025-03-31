import FeaturedCoureses from "@/components/FeaturedCoureses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCoureses/>
        <WhyChooseUs/>
        <MusicSchoolTestimonial/>
      </h1>
    </div>
  );
}

import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
      </h1>
    </div>
  );
}

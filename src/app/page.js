import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats"; // Assuming we reuse the logic from your attached Stats.jsx
import Testimonials from "@/components/Testimonials"; // We'll build this next if not already
import WhyChooseUs from "@/components/WhyChooseUs"; // New component for the "Why Choose Us" section
import CtaSection from "@/components/CtaSection"; // Bottom CTA before footer

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* 1. Cinematic Hero Section */}
      <Hero />
      
      {/* 2. Stats Row (Social Proof) - Integrating your stats data */}
      <Stats />

      {/* 3. Bento Grid Services */}
      <Services />

      {/* 4. Why Choose Us (Feature Highlights) */}
      <WhyChooseUs />

      {/* 5. Testimonials (Marquee) */}
      <Testimonials />
      
      {/* 6. Final Call to Action */}
      <CtaSection />
    </div>
  );
}

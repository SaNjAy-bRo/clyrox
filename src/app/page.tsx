import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ExcelSection } from "@/components/ExcelSection";
import { TrustedPlatforms } from "@/components/TrustedPlatforms";
import { ConsultantShowcase } from "@/components/ConsultantShowcase";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ExcelSection />
      <TrustedPlatforms />
      <ConsultantShowcase />
      <ServicesGrid />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

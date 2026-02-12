import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import WhyPriceSection from "@/components/WhyPriceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import MobileStickyButton from "@/components/MobileStickyButton";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <WhatIsSection />
      <FeaturesSection />
      <PricingSection />
      <WhyPriceSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
    </main>
    <FooterSection />
    <MobileStickyButton />
  </>
);

export default Index;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MeetAniSection from "@/components/MeetAniSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import SupportSection from "@/components/SupportSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <MeetAniSection />
        <FeaturesSection />
        <FAQSection />
        <SupportSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

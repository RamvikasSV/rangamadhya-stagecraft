import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import WorkshopsPreview from "@/components/WorkshopsPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutPreview />
        <WorkshopsPreview />
      </main>
    </div>
  );
};

export default Index;

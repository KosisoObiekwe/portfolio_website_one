import { Navigation } from "@/sections/Navigation";
import { HeroSection } from "@/sections/HeroSection";
import { IntroSection } from "@/sections/IntroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FooterSection } from "@/sections/FooterSection";
import { BackToTop } from "@/components/BackToTop";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FooterSection />
      <BackToTop />
    </div>
  );
}

export default App;

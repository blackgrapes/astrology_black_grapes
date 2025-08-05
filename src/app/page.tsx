import HeroSection from "./components/landing/heroSection";
import HowItWorks from "./components/landing/HowItWork";
import Testimonials from "./components/landing/Testimonials";
import PopularFeatures from "./components/landing/PopularFeatures";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <PopularFeatures />
      <Testimonials />
    </main>
  );
}

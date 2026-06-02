import Hero from "../components/Hero";
import Features from "../components/Features";
import Archetypes from "../components/Archetypes";
import MoodSpectrum from "../components/MoodSpectrum";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Archetypes />
      <MoodSpectrum />
      <Footer />
    </main>
  );
}

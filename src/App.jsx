import HeroSection from "./components/HeroSection";
import HowItsWorks from "./components/HowItsWorks";
import KeyFeture from "./components/KeyFeture";
import Navbar from "./components/Navbar";
import PricePlane from "./components/PricePlane";

function App() {
  return (
    <>
      {/* text-neutral-300 :- This class changes the text color to a light gray. */}
      <main className="text-sm text-neutral-300 antialiased">
        <Navbar />
        <HeroSection />
        <HowItsWorks />
        <KeyFeture />
        <PricePlane />
      </main>
    </>
  );
}

export default App;

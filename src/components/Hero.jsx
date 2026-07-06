import HeroContent from "./HeroContent";
import Terminal from "./Terminal";

function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="mx-auto max-w-7xl w-full px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <HeroContent />

          <Terminal />

        </div>

      </div>

    </section>
  );
}

export default Hero;
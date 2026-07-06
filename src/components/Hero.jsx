import HeroContent from "./HeroContent";
import Terminal from "./Terminal";
import PhotoCard from "./PhotoCard";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">

          {/* Sol - Fotoğraf */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <PhotoCard />
          </div>

          {/* Orta - Hero */}
          <div className="lg:col-span-5">
            <HeroContent />
          </div>

          {/* Sağ - Terminal */}
          <div className="lg:col-span-4">
            <Terminal />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
import ctfPlatforms from "../data/ctfPlatforms";
import CTFCard from "./CTFCard";


function CTFPlatforms() {
  return (
    <section
      id="ctf"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            CTF Platforms
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Hands-on Cybersecurity Practice
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I continuously improve my offensive and defensive security skills
            by solving Capture The Flag challenges, vulnerable machines,
            web security labs, and documenting my solutions through
            technical writeups.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {ctfPlatforms.map((platform) => (

            <CTFCard
              key={platform.name}
              {...platform}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default CTFPlatforms;
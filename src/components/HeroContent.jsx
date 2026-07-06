import Button from "./Button";

function HeroContent() {
  return (
    <div>

      <p className="text-sky-400 font-semibold mb-4">
        Junior Penetration Tester
      </p>

      <h1 className="text-6xl font-black">
        0xAHMETCAN
      </h1>

      <p className="text-slate-400 text-xl leading-9 mt-8 max-w-xl">

        Passionate about offensive security,

        web application security,

        Active Directory,

        and CTF writeups.

      </p>

      <div className="flex gap-5 mt-10">

        <Button>

          Download CV

        </Button>

        <Button variant="secondary">

          Contact Me

        </Button>

      </div>

    </div>
  );
}

export default HeroContent;
import Button from "./Button";

function HeroContent() {
  return (
    <div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400">
        👋 Open to Junior Pentester Opportunities
      </div>

      {/* Ünvan */}
      <p className="mb-4 text-sky-400 font-semibold tracking-wide uppercase">
        Junior Penetration Tester
      </p>

      {/* Başlık */}
      <h1
  className="
  logo-font
  text-6xl
  lg:text-7xl
  font-black
  leading-none
  tracking-tight
  bg-gradient-to-r
  from-white
  via-slate-200
  to-sky-400
  bg-clip-text
  text-transparent"
>
  0xAHMETCAN
</h1>

      {/* Açıklama */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        Passionate about offensive security, web application security, and
        Active Directory assessments. I enjoy solving CTF challenges,
        publishing technical write-ups, and continuously improving my
        cybersecurity skills through hands-on labs and real-world scenarios.
      </p>

      {/* Teknolojiler */}
      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
          Web Security
        </span>

        <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
          Active Directory
        </span>

        <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
          Red Team
        </span>

        <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
          CTF Player
        </span>

      </div>

      {/* Butonlar */}
     {/* Butonlar */}

<div className="mt-10 flex flex-wrap gap-5">

  <Button
    href="https://blog.0xahmetcan.com/wp-content/uploads/2026/07/ahmetcan_resume.pdf"
    target="_blank"
  >
    Download CV
  </Button>

  <Button
    variant="secondary"
    href="https://blog.0xahmetcan.com"
    target="_blank"
  >
    View Blog
  </Button>

</div>

    </div>
  );
}

export default HeroContent;
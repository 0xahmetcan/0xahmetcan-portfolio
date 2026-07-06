import Button from "./Button";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">

      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-8 py-4 backdrop-blur-xl">

        {/* Logo */}

        <a
          href="#"
          className="logo-font text-4xl font-black text-white tracking-tight"
        >
          0xAHMETCAN
        </a>

        {/* Menu */}

        <div className="hidden items-center gap-10 lg:flex">

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#experience" className="nav-link">
            Experience
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#ctf" className="nav-link">
            Write-ups
          </a>

          <a href="#blog" className="nav-link">
            Blog
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-500 hover:text-white">
            EN
          </button>

          <div className="hidden rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400 lg:flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

            Open to Work

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;
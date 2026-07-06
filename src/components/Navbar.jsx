import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "../data/navigation";
import { site } from "../data/site";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <nav className="mt-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">

          <div className="flex items-center justify-between px-6 py-4">

            {/* LOGO */}

            <a
              href="#"
              className="font-black text-2xl tracking-tight"
            >
              {site.name}
            </a>

            {/* DESKTOP MENU */}

            <div className="hidden md:flex gap-10">

              {navigation.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition"
                >
                  {item.title}
                </a>

              ))}

            </div>

            {/* STATUS */}

            <div className="hidden lg:flex items-center gap-2">

              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm text-slate-400">

                Available for Work

              </span>

            </div>

            {/* MOBILE */}

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >

              {open ? <X /> : <Menu />}

            </button>

          </div>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;
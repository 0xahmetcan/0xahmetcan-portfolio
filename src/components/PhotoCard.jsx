import profilePhoto from "../assets/images/0xahmetcan-photo.jpg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

function PhotoCard() {
  return (
    <div className="max-w-[300px] rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-md p-5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-sky-500/40 hover:shadow-sky-500/20">

      {/* Fotoğraf */}
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-800">
        <img
          src={profilePhoto}
          alt="Ahmet Can"
          className="h-full w-full object-cover object-top transition-all duration-500 hover:scale-105"
        />
      </div>

      {/* Bilgiler */}
      <div className="mt-5">

        <h3 className="text-2xl font-bold text-white">
          Ahmet Can
        </h3>

        <p className="mt-1 text-sky-400 font-medium">
          Junior Penetration Tester
        </p>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
          <MdLocationOn size={18} />
          <span>Ankara, Türkiye</span>
        </div>

        {/* Status */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          Open to Work
        </div>

        {/* Sosyal Medya */}
        <div className="mt-6 flex justify-between">

          <a
            href="https://github.com/0xahmetcan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-300 hover:bg-sky-500 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ahmetcanaytekin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-300 hover:bg-sky-500 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:ahmetcandev01@gmail.com"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-300 hover:bg-sky-500 hover:text-white"
          >
            <MdEmail size={20} />
          </a>

        </div>

      </div>

    </div>
  );
}

export default PhotoCard;
import { FaArrowRight, FaBookOpen } from "react-icons/fa";

function CTFCard({
  logo,
  name,
  username,
  description,
  profile,
  writeups,
  profileButton,
  writeupButton,
}) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-sky-500/40
        hover:shadow-xl
        hover:shadow-sky-500/10
      "
    >
      {/* Logo + Title */}

      <div className="flex items-center gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">

          <img
            src={logo}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />

        </div>

        <div>

          <h3 className="text-2xl font-bold text-white">
            {name}
          </h3>

          <p className="mt-1 text-sky-400">
            @{username}
          </p>

        </div>

      </div>

      {/* Description */}

      <p className="mt-8 leading-8 text-slate-400">
        {description}
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href={profile}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-sky-500
            px-5
            py-3
            font-medium
            text-white
            transition
            hover:bg-sky-400
          "
        >
          {profileButton}

          <FaArrowRight size={14} />

        </a>

        <a
          href={writeups}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-700
            px-5
            py-3
            text-slate-300
            transition
            hover:border-sky-500
            hover:text-sky-400
          "
        >
          <FaBookOpen size={14} />

          {writeupButton}

        </a>

      </div>

    </div>
  );
}

export default CTFCard;
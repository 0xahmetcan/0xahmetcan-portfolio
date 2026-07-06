import useTerminal from "../hooks/useTerminal";
import { terminalLines } from "../data/terminal";

function Terminal() {
  const lines = useTerminal(terminalLines);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-3">

        <div className="h-3 w-3 rounded-full bg-red-500" />

        <div className="h-3 w-3 rounded-full bg-yellow-500" />

        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-slate-400">
          terminal@0xahmetcan
        </span>

      </div>

      {/* Body */}

      <div className="p-6 font-mono text-sm leading-7">

        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <span className="animate-pulse">█</span>

      </div>

    </div>
  );
}

export default Terminal;
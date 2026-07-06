import { useEffect, useState } from "react";

export default function useTerminal(lines, speed = 700) {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setVisibleLines(lines.slice(0, index + 1));

      index++;

      if (index >= lines.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [lines, speed]);

  return visibleLines;
}
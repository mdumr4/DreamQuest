
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export default function AnimatedText({ text, className, delay = 100 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, delay);
    return () => clearInterval(intervalId);
  }, [text, delay]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn("relative font-bold", className)}>
        <span>{displayedText}</span>
        <span className="animate-pulse">|</span>
    </div>
  );
}

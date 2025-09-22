"use client";

import { cn } from "@/lib/utils";
import { ReactElement, useEffect, useState } from "react";

type FloatingIconProps = {
  icon: ReactElement;
  className?: string;
  delay?: number;
};

export default function FloatingIcon({ icon, className, delay = 0 }: FloatingIconProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute text-primary/20 floating text-4xl md:text-5xl",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {icon}
    </div>
  );
}

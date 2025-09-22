
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type RemovableBadgeProps = {
  value: string;
  onRemove: () => void;
  className?: string;
};

export default function RemovableBadge({ value, onRemove, className }: RemovableBadgeProps) {
  if (!value) return null;
  
  return (
    <div
      className={cn(
        "relative group py-2.5 text-base transition-all duration-200 rounded-full font-medium flex items-center justify-center",
        "px-5",
        className
      )}
    >
      <Badge variant="outline" className="w-full h-full absolute inset-0 border-0" />
      <span className="relative z-10 mr-6">{value}</span>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
        onClick={onRemove}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Remove {value}</span>
      </Button>
    </div>
  );
}

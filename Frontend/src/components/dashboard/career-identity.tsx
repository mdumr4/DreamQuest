
"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { User, RefreshCw, Clipboard, Compass, Bot } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type CareerIdentityProps = {
  statement: string;
  isLoading: boolean;
  onRegenerate: () => void;
  onNavigateToExplore: () => void;
  onNavigateToMentor: () => void;
};

export default function CareerIdentity({ statement, isLoading, onRegenerate, onNavigateToExplore, onNavigateToMentor }: CareerIdentityProps) {
  const { toast } = useToast();

  const handleCopyToClipboard = () => {
    if (!statement) return;
    navigator.clipboard.writeText(statement);
    toast({
      title: "Copied to clipboard!",
      description: "Your career identity statement has been copied.",
    });
  };

  return (
    <div className="flex flex-col p-4 animate-in fade-in-50">
      <div className="rounded-xl border bg-background p-6 flex flex-col shadow-sm min-h-[320px]">
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <div className="flex items-center gap-3">
                <User className="h-6 w-6 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Career Identity Statement</h2>
            </div>
        </div>
        
        <div className="flex-grow">
            {isLoading ? (
                <div className="space-y-3">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-3/4" />
                </div>
            ) : (
                <p className="text-lg text-foreground/80 leading-relaxed">
                    {statement}
                </p>
            )}
        </div>
        
        <div className="mt-auto pt-4 border-t flex-shrink-0 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={onRegenerate} disabled={isLoading}>
                        <RefreshCw className={cn("h-4 w-4 mr-2", isLoading && "animate-spin")} />
                        Re-generate
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground" onClick={handleCopyToClipboard} disabled={isLoading || !statement}>
                        <Clipboard className="h-4 w-4" />
                    </Button>
                </div>
                <Button size="lg" disabled={isLoading} className="button-gradient rounded-lg font-semibold flex-1 w-full sm:w-auto" onClick={onNavigateToExplore}>
                   <Compass className="mr-2 h-5 w-5" /> Explore Paths
                </Button>
            </div>
            <div className="text-center mt-4">
                 <Button size="lg" disabled={isLoading} variant="outline" className="w-full button-gradient-border rounded-lg font-semibold" onClick={onNavigateToMentor}>
                    <Bot className="mr-2 h-5 w-5" /> Talk to AI Mentor
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}

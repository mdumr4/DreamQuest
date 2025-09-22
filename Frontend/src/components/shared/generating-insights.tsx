
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GeneratingInsights() {
  return (
    <div className="flex items-center justify-start py-8">
      <div className="flex items-center space-x-3 text-lg text-muted-foreground">
        <Sparkles className={cn(
          "h-6 w-6 icon-spin-and-twinkle animated-text-gradient"
        )} />
        <span className="insight-text-animation animated-text-gradient font-semibold">Generating insights...</span>
      </div>
    </div>
  );
}

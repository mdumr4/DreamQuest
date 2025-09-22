
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Pin, ChevronLeft } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

// Inlined type definition
type CareerPath = {
  title: string;
  description: string;
};

type ExploreSidebarProps = {
  paths: CareerPath[];
  activePath: string;
  type: 'jobs' | 'courses';
  onToggle: () => void;
};


export default function ExploreSidebar({ paths, activePath, type, onToggle }: ExploreSidebarProps) {
  const [pinnedPaths, setPinnedPaths] = useState<string[]>([]);
  
  const handlePinToggle = (e: React.MouseEvent, pathToToggle: string) => {
    e.preventDefault();
    e.stopPropagation();

    setPinnedPaths(prev => {
        if (prev.includes(pathToToggle)) {
            return prev.filter(p => p !== pathToToggle);
        } else {
            return [...prev, pathToToggle];
        }
    });
  };

  const sortedPaths = useMemo(() => {
    const pinned = paths.filter(p => pinnedPaths.includes(p.title));
    const unpinned = paths.filter(p => !pinnedPaths.includes(p.title));
    return [...pinned, ...unpinned];
  }, [paths, pinnedPaths]);

  return (
    <div className="h-full w-[320px] bg-background/80 backdrop-blur-sm border-r flex flex-col">
        <div className="p-4 border-b flex items-center justify-between h-16">
            <h3 className="text-lg font-semibold tracking-tight">
                Explore {type === 'jobs' ? 'Jobs' : 'Courses'}
            </h3>
            <Button variant="ghost" onClick={onToggle} size="icon" className='h-8 w-8'>
                <ChevronLeft className="h-5 w-5" />
            </Button>
        </div>
        <ScrollArea className="flex-1">
            <div className="p-2">
                <ul className="space-y-1">
                {sortedPaths.map((path) => {
                    const slug = path.title.toLowerCase().replace(/[\s/]+/g, '-').replace(/[^a-z0-9-]/g, '');
                    const href = `/explore/${slug}?type=${type}`;
                    const isActive = path.title === activePath;
                    const isPinned = pinnedPaths.includes(path.title);

                    return (
                    <li key={path.title}>
                        <Link
                            href={href}
                            className={cn(
                                'group flex items-center justify-between p-3 rounded-md text-sm font-medium transition-colors',
                                isActive
                                    ? 'bg-accent/50 text-accent-foreground'
                                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                            )}
                        >
                            <span className="truncate pr-2">{path.title}</span>
                            <button 
                                onClick={(e) => handlePinToggle(e, path.title)}
                                className={cn(
                                    "p-1 rounded-full transition-colors",
                                    "hover:bg-primary/20",
                                    isPinned ? "text-primary opacity-100" : "text-muted-foreground/60 opacity-0 group-hover:opacity-100"
                                )}
                                aria-label={isPinned ? 'Unpin' : 'Pin to top'}
                            >
                                <Pin className={cn("h-4 w-4 shrink-0 transition-all", isPinned && "fill-current")} />
                            </button>
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </div>
        </ScrollArea>
    </div>
  );
}

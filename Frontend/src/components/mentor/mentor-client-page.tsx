
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MoreVertical, Info, Hand, Bot, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

const Logo = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center", className)}>
      <span className="font-bold inline-block text-xl">
        <span>Dream</span>{' '}
        <span className="animated-text-gradient bg-clip-text text-transparent">
          Quest
        </span>
      </span>
    </div>
);


export default function MentorClientPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-dvh bg-muted/20">
      <header className="header-nav px-4 md:px-6">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
            <div className="flex-1 flex justify-start">
                <Button variant="ghost" onClick={() => router.back()} className="px-3">
                    <ArrowLeft className="h-5 w-5" />
                    <span className="ml-1 text-base">Back</span>
                </Button>
            </div>
            <div className="flex-1 flex justify-center">
                <Link href="/" className="flex items-center logo-hover-glow transition-all duration-300">
                    <Logo />
                </Link>
            </div>
            <div className="flex-1 flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                        <MoreVertical className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                        <Link href="/feedback">
                            <Hand className="mr-2 h-4 w-4" />
                            <span>Send Feedback</span>
                        </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="relative flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
            <div className="central-hub-gradient" />
            <div className="relative p-6 bg-background rounded-full shadow-2xl border">
                <Bot className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mt-8 z-10 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary animate-twinkle" />
                <span>AI Mentor Coming Soon</span>
                <Sparkles className="h-6 w-6 text-primary animate-twinkle animation-delay-200" />
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md z-10">
                We're hard at work building an interactive AI mentor to guide you. Stay tuned for this exciting new feature!
            </p>
        </div>
      </main>
    </div>
  );
}

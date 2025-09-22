
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import RoleSelectionModal from './role-selection-modal';
import { cn } from '@/lib/utils';
import { useAuthStatus } from '@/hooks/use-auth-status';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleStartClick = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <section className="relative w-full">
        <div className="container relative z-10 flex min-h-dvh items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-6xl">
            <h1 className={cn(
              "text-6xl tracking-tight sm:text-7xl md:text-8xl lg:text-9xl font-bold",
              "animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out"
            )}>
              <span>Dream </span>
              <span className="animated-text-gradient bg-clip-text text-transparent">
                Quest
              </span>
            </h1>
            <p className={cn(
                "mt-6 text-lg text-muted-foreground sm:text-xl",
                "animate-in fade-in slide-in-from-bottom-10 duration-500 ease-out"
              )}
              style={{ animationDelay: '100ms' }}
            >
              A playful way to explore career possibilities with AI.
            </p>
            <div 
              className={cn(
                "mt-10",
                "animate-in fade-in zoom-in-95 duration-500 ease-out"
              )}
              style={{ animationDelay: '200ms' }}
            >
              <Button 
                size="lg" 
                className="button-gradient rounded-md font-semibold text-lg px-8 py-6 transition-transform duration-300 ease-out hover:scale-105 active:scale-100"
                onClick={handleStartClick}
              >
                Start
              </Button>
            </div>
          </div>
        </div>
      </section>
      <RoleSelectionModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}


"use client";

import { useState, useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import AnimatedText from '@/components/landing/animated-text';
import FormHeader from './form-header';
import Footer from '../landing/footer';

const MAX_ROLE_LENGTH = 50;
const MAX_WORDS = 5;
const HEADING_TEXT = "To start, share a current or previous role:";
const HEADING_ANIMATION_DELAY = 25;
const PLACEHOLDER_ROLES = ["student", "clerk", "project manager", "artist", "engineer"];

export default function AspirantRoleForm() {
  const [roleInput, setRoleInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const [showEmoji, setShowEmoji] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [placeholder, setPlaceholder] = useState(PLACEHOLDER_ROLES[0]);

  useEffect(() => {
    const emojiTimer = setTimeout(() => setShowEmoji(true), 0); 
    const headingTimer = setTimeout(() => setShowHeading(true), 200); 
    const headingAnimationDuration = HEADING_TEXT.length * HEADING_ANIMATION_DELAY;
    const formDelay = 200 + headingAnimationDuration + 100;
    const formTimer = setTimeout(() => setShowForm(true), formDelay);

    return () => {
      clearTimeout(emojiTimer);
      clearTimeout(headingTimer);
      clearTimeout(formTimer);
    };
  }, []);

  useEffect(() => {
    if (showForm) {
      let i = 0;
      const placeholderInterval = setInterval(() => {
        i = (i + 1) % PLACEHOLDER_ROLES.length;
        setPlaceholder(PLACEHOLDER_ROLES[i]);
      }, 1800);
      return () => clearInterval(placeholderInterval);
    }
  }, [showForm]);

  const handleNext = async () => {
    if (isNextDisabled()) return;
    startTransition(async () => {
      const isStudent = roleInput.trim().toLowerCase() === 'student';
      if (isStudent) {
          router.push(`/aspirant/interests?role=${encodeURIComponent(roleInput)}`);
      } else {
          router.push(`/aspirant/organization?role=${encodeURIComponent(roleInput)}`);
      }
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleNext();
    }
  };

  const wordCount = roleInput.trim() ? roleInput.trim().split(/\s+/).length : 0;

  const isNextDisabled = () => {
    if (isPending) return true;
    if (!roleInput.trim()) return true;
    if (wordCount > MAX_WORDS) return true;
    return false;
  }

  return (
    <div className="flex flex-col min-h-dvh bg-transparent">
        <FormHeader />
        <main className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl flex flex-col items-start text-left">
                <div className="h-12 flex items-center">
                    {showEmoji && (
                    <span className="text-2xl md:text-3xl lg:text-4xl waving-hand animate-in fade-in duration-300">
                        👋
                    </span>
                    )}
                    {showHeading && (
                    <div className="ml-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <AnimatedText
                        text={HEADING_TEXT}
                        className="text-2xl md:text-3xl"
                        delay={HEADING_ANIMATION_DELAY}
                        />
                    </div>
                    )}
                </div>

                {showForm && (
                    <>
                    <div className="w-full max-w-md mt-10 animate-in fade-in slide-in-from-bottom-5 duration-500">
                        <Input
                        type="text"
                        placeholder={placeholder}
                        value={roleInput}
                        onChange={(e) => setRoleInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        maxLength={MAX_ROLE_LENGTH}
                        className={cn(
                            "text-left text-3xl md:text-4xl lg:text-5xl h-auto p-0 font-bold bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-all",
                            "placeholder:text-muted-foreground/30"
                        )}
                        autoFocus
                        />
                        <div className="text-sm text-muted-foreground mt-4 pr-1">
                        {wordCount}/{MAX_WORDS} words or {roleInput.length}/{MAX_ROLE_LENGTH} characters
                        </div>
                    </div>

                    <div className="w-full max-w-sm mt-10">
                        <Button
                        size="lg"
                        className="button-gradient font-bold text-lg py-6 rounded-lg transition-transform duration-200 hover:scale-105"
                        disabled={isNextDisabled()}
                        onClick={handleNext}
                        >
                        {isPending ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <>
                            Next <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                        )}
                        </Button>
                    </div>
                    </>
                )}
            </div>
        </main>
      <Footer />
    </div>
  );
}

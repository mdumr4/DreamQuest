
"use client";

import { useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FormHeader from './form-header';
import Footer from '@/components/landing/footer';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function TasksClientPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  const organization = searchParams.get('organization');

  const [tasksInput, setTasksInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleNext = () => {
    startTransition(async () => {
       const params = new URLSearchParams({
            role: role || '',
            organization: organization || '',
            tasks: tasksInput,
        });
        router.push(`/aspirant/interests?${params.toString()}`);
    });
  };

  const handleBack = () => {
    router.back();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleNext();
    }
  };

  return (
    <div className="flex flex-col min-h-dvh bg-transparent">
      <FormHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl flex flex-col items-start text-left">
          <div className="w-full animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-xl md:text-2xl font-semibold text-foreground">
              Enter the tasks you carried out as a{' '}
              <span className="capitalize font-bold">{role}</span>
            </h1>
            <div className="w-full mt-8">
              <Label htmlFor="tasks-input" className="sr-only">
                Tasks you carried out
              </Label>
              <Textarea
                id="tasks-input"
                placeholder="e.g., Managed project timelines, prepared weekly reports, trained new team members on company software..."
                value={tasksInput}
                onChange={(e) => setTasksInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="mt-2 text-base min-h-[120px]"
                maxLength={500}
              />
               <p className="text-sm text-muted-foreground mt-2 text-right">{tasksInput.length}/500</p>
            </div>
            <div className="w-full mt-8 flex gap-4">
              <Button
                size="lg"
                variant="outline"
                className="font-bold text-lg py-6 rounded-lg transition-transform duration-300 hover:scale-105"
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                size="lg"
                className="button-gradient font-bold text-lg py-6 rounded-lg transition-transform duration-300 hover:scale-105"
                disabled={isPending || !tasksInput.trim()}
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

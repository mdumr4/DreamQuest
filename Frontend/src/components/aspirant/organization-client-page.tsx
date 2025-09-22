
"use client";

import { useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FormHeader from './form-header';
import Footer from '@/components/landing/footer';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

const MAX_ORGANIZATION_LENGTH = 75;

export default function OrganizationClientPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  
  const [organizationInput, setOrganizationInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleNext = () => {
    startTransition(async () => {
      const params = new URLSearchParams({
          role: role || '',
          organization: organizationInput,
      });
      router.push(`/aspirant/tasks?${params.toString()}`);
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleNext();
    }
  };
  
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col min-h-dvh bg-transparent">
      <FormHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl flex flex-col items-start text-left">
            <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 w-full">
              <h1 className="text-5xl md:text-6xl font-bold capitalize">
                {role}
              </h1>

              <div 
                className="w-full max-w-md mt-4"
              >
                  <Input
                      id="organization"
                      type="text"
                      placeholder="Organization or industry (optional)"
                      value={organizationInput}
                      onChange={(e) => setOrganizationInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      maxLength={MAX_ORGANIZATION_LENGTH}
                      className={cn(
                          "text-left text-lg md:text-xl h-auto p-0 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-all",
                          "placeholder:text-muted-foreground/50"
                      )}
                      autoFocus
                  />
              </div>

              <div
                  className="w-full mt-10 flex gap-4"
              >
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
                    disabled={isPending}
                    onClick={handleNext}
                  >
                    {isPending ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        Next
                        <ArrowRight className="ml-2 h-5 w-5" />
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

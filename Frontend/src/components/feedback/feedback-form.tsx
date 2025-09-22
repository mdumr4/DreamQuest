
'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Logo = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center", className)}>
      <span className="font-bold inline-block text-2xl">
        <span>Dream</span>{' '}
        <span className="animated-text-gradient bg-clip-text text-transparent">
          Quest
        </span>
      </span>
    </div>
);

const initialFormState = {
  name: '',
  email: '',
  liked: '',
  improved: '',
  missing: '',
  screenshots: '',
};

export default function FeedbackForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
        toast({
            title: 'Missing Information',
            description: 'Please fill out your name and email.',
            variant: 'destructive',
        });
        return;
    }
    startTransition(async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Simulating feedback submission:", formData);
      toast({
        title: 'Feedback Submitted!',
        description: "Thank you for helping us improve Dream Quest.",
      });
      handleClear();
      router.push('/');
    });
  };

  return (
    <div className="flex flex-col min-h-dvh bg-muted/30">
        <header className="sticky top-0 z-10 header-nav px-4 md:px-6">
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
                <div className="flex-1" />
            </div>
        </header>

      <main className="flex-1 w-full flex items-start justify-center p-4 py-16 md:p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-5 duration-500 space-y-12">
            <div className="text-center space-y-3">
                <h1 className="text-5xl font-bold tracking-tight">Dream Quest Feedback Form</h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                    Your feedback helps us to improve. Please share your thoughts on your experience.
                </p>
            </div>

            <div className="space-y-10">
                <div className="space-y-3">
                    <Label htmlFor="name" className="font-medium text-foreground/80 text-base">Name</Label>
                    <Input id="name" name="name" placeholder="First Last" value={formData.name} onChange={handleInputChange} required className="h-16 text-xl feedback-input" />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="email" className="font-medium text-foreground/80 text-base">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="email@gmail.com" value={formData.email} onChange={handleInputChange} required className="h-16 text-xl feedback-input" />
                </div>

                <div className="space-y-3">
                    <Label htmlFor="liked" className="font-medium text-foreground/80 text-base">What did you like about the experience? <span className="text-sm text-muted-foreground">(optional)</span></Label>
                    <Textarea id="liked" name="liked" placeholder="Your answer" value={formData.liked} onChange={handleInputChange} className="min-h-[140px] text-xl feedback-input" />
                </div>

                <div className="space-y-3">
                    <Label htmlFor="improved" className="font-medium text-foreground/80 text-base">What could be improved about the experience? <span className="text-sm text-muted-foreground">(optional)</span></Label>
                    <Textarea id="improved" name="improved" placeholder="Your answer" value={formData.improved} onChange={handleInputChange} className="min-h-[140px] text-xl feedback-input" />
                </div>

                <div className="space-y-3">
                    <Label htmlFor="missing" className="font-medium text-foreground/80 text-base">Was anything missing from the experience? <span className="text-sm text-muted-foreground">(optional)</span></Label>
                    <Textarea id="missing" name="missing" placeholder="Your answer" value={formData.missing} onChange={handleInputChange} className="min-h-[140px] text-xl feedback-input" />
                </div>

                 <div className="space-y-3">
                    <Label htmlFor="screenshots" className="font-medium text-foreground/80 text-base">Links to screenshots on Google Drive <span className="text-sm text-muted-foreground">(if applicable)</span></Label>
                    <Input id="screenshots" name="screenshots" placeholder="https://drive.google.com/my-file.png" value={formData.screenshots} onChange={handleInputChange} className="h-16 text-xl feedback-input" />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 pt-8 border-t">
                <Button type="button" variant="ghost" onClick={handleClear} disabled={isPending} className="text-muted-foreground hover:text-foreground text-base">
                    Clear Form
                </Button>
                <Button type="submit" disabled={isPending} className="button-gradient w-full sm:w-auto px-8 py-6 font-semibold text-lg rounded-lg">
                    {isPending ? <Loader2 className="animate-spin" /> : <>Submit Feedback <Send className="ml-2 h-4 w-4" /></>}
                </Button>
            </div>
        </form>
      </main>
    </div>
  );
}

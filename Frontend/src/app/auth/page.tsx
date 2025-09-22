'use client';

import AuthForm from '@/components/auth/auth-form';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Rocket, Moon, Sparkles, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FloatingIcon from '@/components/landing/floating-icon';

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center justify-center bg-background overflow-hidden p-4">
      {/* Background decorations */}
      <div 
        className="absolute inset-0 w-full h-full bg-background/80 backdrop-blur-sm"
        style={{
            backgroundImage: `
                radial-gradient(circle at 15% 50%, hsl(var(--primary)/0.05), transparent 40%),
                radial-gradient(circle at 85% 30%, hsl(var(--accent)/0.05), transparent 40%)
            `
        }}
      />
      <FloatingIcon icon={<Rocket />} className="top-[10%] left-[5%]" />
      <FloatingIcon icon={<Moon />} className="top-[20%] right-[10%]" delay={1.5} />
      <FloatingIcon icon={<Sparkles />} className="bottom-[15%] left-[20%]" delay={2} />
      <FloatingIcon icon={<Star />} className="bottom-[30%] right-[25%]" delay={0.5} />
      <FloatingIcon icon={<Sparkles />} className="top-[50%] left-[15%]" delay={3} />
      <FloatingIcon icon={<Star />} className="top-[60%] right-[5%]" delay={2.5} />


       <div className="absolute top-4 left-4 z-20">
        <Button variant="ghost" onClick={() => router.push('/')} className="px-3">
          <ArrowLeft className="h-5 w-5" />
          <span className="ml-2 text-base">Back</span>
        </Button>
      </div>
      <div className="relative z-10 w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-500">
        <AuthForm />
      </div>
    </div>
  );
}

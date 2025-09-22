
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
import Footer from '@/components/landing/footer';
import ExplorerRoleForm from './explorer-role-form';

export default function ExplorerClientPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-transparent">
      <FormHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <ExplorerRoleForm />
      </main>
      <Footer />
    </div>
  );
}


'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const FeedbackForm = dynamic(
  () => import('@/components/feedback/feedback-form'),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col min-h-dvh bg-muted/20">
        <header className="flex h-14 items-center justify-between border-b bg-background px-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl space-y-8">
            <div className="text-center space-y-2">
                <Skeleton className="h-8 w-1/2 mx-auto" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-12 w-full" />
            </div>
             <div className="flex justify-between">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </main>
      </div>
    ),
  }
);

export default function FeedbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeedbackForm />
    </Suspense>
  );
}

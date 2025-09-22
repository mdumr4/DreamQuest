

'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const InterestsClientPage = dynamic(
  () => import('@/components/aspirant/interests-client-page'),
  {
    ssr: false,
    loading: () => (
        <div className="flex flex-col min-h-dvh bg-transparent">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl flex flex-col items-start text-left">
              <Skeleton className="h-10 w-3/4 mb-8" />
              <div className="w-full max-w-md">
                <Skeleton className="h-12 w-full" />
              </div>
              <div className="w-full max-w-sm mt-10">
                <Skeleton className="h-16 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ),
  }
);

function InterestsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InterestsClientPage />
    </Suspense>
  );
}

export default InterestsPage;

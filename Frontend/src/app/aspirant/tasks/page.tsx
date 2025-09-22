
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const TasksClientPage = dynamic(
  () => import('@/components/aspirant/tasks-client-page'),
  {
    ssr: false,
    loading: () => (
        <div className="flex flex-col min-h-dvh bg-transparent">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl flex flex-col items-start text-left">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-24 w-full" />
              <div className="flex gap-4 mt-10">
                <Skeleton className="h-12 w-24 rounded-lg" />
                <Skeleton className="h-12 w-24 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ),
  }
);

function TasksPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TasksClientPage />
    </Suspense>
  );
}

export default TasksPage;

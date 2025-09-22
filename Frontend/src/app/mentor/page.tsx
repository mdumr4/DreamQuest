
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import useAuthRedirect, { AuthLoadingSkeleton } from '@/hooks/use-auth-redirect';

const MentorClientPage = dynamic(
  () => import('@/components/mentor/mentor-client-page'),
  {
    ssr: false,
    loading: () => <AuthLoadingSkeleton />,
  }
);

export default function MentorPage() {
  const { isLoading, user } = useAuthRedirect();
  if (isLoading || !user) {
     return <AuthLoadingSkeleton />;
  }
  return (
    <Suspense fallback={<AuthLoadingSkeleton />}>
      <MentorClientPage />
    </Suspense>
  );
}

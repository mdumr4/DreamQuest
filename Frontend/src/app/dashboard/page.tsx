
'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import useAuthRedirect, { AuthLoadingSkeleton } from '@/hooks/use-auth-redirect';

const DashboardClientPage = dynamic(
  () => import('@/components/dashboard/dashboard-client-page'),
  { 
    ssr: false,
    loading: () => <AuthLoadingSkeleton />,
  }
);

export default function DashboardPage() {
  const { isLoading, user } = useAuthRedirect();
  if (isLoading || !user) {
    return <AuthLoadingSkeleton />;
  }

  const profile = {
    name: user.displayName || user.email || 'User',
    roles: [],
  };

  return (
    <Suspense fallback={<AuthLoadingSkeleton />}>
      <DashboardClientPage profile={profile} />
    </Suspense>
  );
}

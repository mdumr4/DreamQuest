
'use client';

import dynamic from 'next/dynamic';
import useAuthRedirect, { AuthLoadingSkeleton } from '@/hooks/use-auth-redirect';

const ExplorerClientPage = dynamic(
  () => import('@/components/explorer/explorer-client-page'),
  { 
    ssr: false,
    loading: () => <AuthLoadingSkeleton />
  }
);

export default function ExplorerStartPage() {
  const { isLoading, user } = useAuthRedirect();

  if (isLoading || !user) {
    return <AuthLoadingSkeleton />;
  }

  return <ExplorerClientPage />;
}

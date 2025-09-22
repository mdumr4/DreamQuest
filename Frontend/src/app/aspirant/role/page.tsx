
"use client";

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import useAuthRedirect from '@/hooks/use-auth-redirect';

const AspirantRoleForm = dynamic(
  () => import('@/components/aspirant/aspirant-role-form'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex flex-col min-h-dvh bg-transparent">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl flex flex-col items-start text-left">
            <Skeleton className="h-10 w-3/4 mb-8" />
            <div className="w-full max-w-md">
              <Skeleton className="h-20 w-full" />
              <div className="text-sm text-muted-foreground text-right mt-2 pr-1">
                <Skeleton className="h-4 w-1/4 ml-auto" />
              </div>
            </div>
            <div className="w-full max-w-sm mt-10">
              <Skeleton className="h-16 w-full rounded-full" />
              <Skeleton className="h-4 w-1/2 mx-auto mt-4" />
            </div>
          </div>
        </div>
      </div>
    )
  }
);

export default function AspirantRolePage() {
  // useAuthRedirect will now check for a user but won't force a redirect for guests
  const { isLoading } = useAuthRedirect();

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-dvh bg-transparent">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl flex flex-col items-start text-left">
            <Skeleton className="h-10 w-3/4 mb-8" />
            <div className="w-full max-w-md">
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AspirantRoleForm />;
}
